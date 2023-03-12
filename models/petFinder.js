const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    useremail: String, // Google firebase user email
    name: String,
	photo: String,
    age: String,
    description: String,
    breed: String,
    gender: String,
    status: String, 
    contact: {
    email: String,
    phone: String,
    address: {
        address1: String,
        city: String,
        state: String,
        postcode: String,
        country: String,
        
    },
   }},
   { timestamps: true });

module.exports = mongoose.model('PetFinder', PetSchema);
