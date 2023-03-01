// Dependencies

const mongoose = require('mongoose');
const express = require('express');

// Aplication object
const app = express();

// Aplication settings
require('dotenv').config();

const { PORT = 5001, DATABASE_URL } = process.env;

// Database connection
mongoose.connect(DATABASE_URL);

//Mongoose conection events
mongoose.connection
.on('open', () => console.log('you are connected to MongoDB'))
.on('close', () => console.log('You are disconnected from MongoDB'))
.on('error', () => console.log(`MongoDB Error: ${error.message}`)) 
const petFinderRoutes = require('./routes/petFinderRoutes');


app.use('/petFinder', petFinderRoutes);


app.listen(PORT, () => console.log(`Express is listening on port; ${PORT}`));


