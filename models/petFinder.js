const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	animals: {
    name: String,
	photo: String,
    age: String,
    description:String,
    breed: String,
    gender: String,
    status: String, 
},
    contact: {
    email: String,
    phone: String,
    address: {
        address1: String,
        city: String,
        state: String,
        postcode: String,
        country: String,
        createdBy: String // Google firebase user Id
    },
   }},
   { timestamps: true });

module.exports = mongoose.model('PetFinder', PetSchema);
