const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	animals: {
    name: String,
	photo: String,
    age: String,
    description:String,
	species: String,
    breeds: String,
    gender: String,
    videos: String,
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
        country: String
    },
   }});

module.exports = mongoose.model('PetFinder', PetSchema);
