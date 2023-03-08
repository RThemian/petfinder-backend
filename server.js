// Dependencies

const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const petFinderRoutes = require('./routes/petFinderRoutes');

// Aplication object


// Aplication settings
require('dotenv').config();

const { PORT = 5001, DATABASE_URL } = process.env;

// Database connection
mongoose.connect(DATABASE_URL);

//Mongoose conection events
mongoose.connection
.on('open', () => console.log('you are connected to MongoDB'))
.on('close', () => console.log('You are disconnected from MongoDB'))
.on('error', (error) => console.log(`MongoDB Error: ${error.message}`)) 



app.use('/petFinder', petFinderRoutes);


app.listen(PORT, () => console.log(`Express is listening on port; ${PORT}`));


