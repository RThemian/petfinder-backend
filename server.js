// Dependencies
const morgan = require('morgan'); // logging
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const { MongoClient } = require("mongodb");
const petFinderRoutes = require('./routes/petFinderRoutes');


const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');


// Aplication object


// Aplication settings
require('dotenv').config();

const { PORT = 5001,
     DATABASE_URL,
     GOOGLE_PRIVATE_KEY_ID, 
     GOOGLE_PRIVATE_KEY, 
     GOOGLE_CLIENT_ID } = process.env;

admin.initializeApp({
credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "pet-purpose-app",
    "private_key_id": GOOGLE_PRIVATE_KEY_ID,
    "private_key": GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": "firebase-adminsdk-qkszg@pet-purpose-app.iam.gserviceaccount.com",
    "client_id": GOOGLE_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qkszg%40pet-purpose-app.iam.gserviceaccount.com"
  }
)});


// Database connection
mongoose.connect(DATABASE_URL);

async function createIndex() {
  try {
    const uri = DATABASE_URL;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    const db = client.db("pet-finder-lab-app");
    
    const petDatabase = db.collection("petDatabase");
    await petDatabase.createIndex({ id: 1, name: 1 }, { unique: true });

    const petfinders = db.collection("petfinders");
    await petfinders.createIndex({ id: 1, name: 1, useremail: 1 }, { unique: true });
    
    console.log("Unique index created successfully");
  } catch (error) {
    console.error("Error creating index:", error);
  }
}




//Mongoose conection events
mongoose.connection
.on('open', () => {
  console.log('you are connected to MongoDB')
  createIndex();
})
.on('close', () => console.log('You are disconnected from MongoDB'))
.on('error', (error) => console.log(`MongoDB Error: ${error.message}`)) 

//authorization middleware

app.use(async function(req, res, next) {
    // capture the token
    const token = req.get('Authorization');
    if(token) {
      const user = await getAuth().verifyIdToken(token.replace('Bearer ', ''));
      console.log("token", token)
      // adding a logged in user to the request object
      req.user = user;
    } else {
      req.user = null;
    }
    next();
  });
  
  function isAuthenticated(req, res, next) {
    if(!req.user) { 
      return res.status(401).send('you must login first');
    }
    next();
  }

app.use('/petfinder', isAuthenticated, petFinderRoutes);


app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`));


