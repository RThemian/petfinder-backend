const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    useremail: String, // Google firebase user email
    id: String,
    name: String,
	photo: String,
    age: String,
    species: String,
    url: String,
    attributes: Object,
    description: String,
    breeds: Object,
    gender: String,
    photos: Object,
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
