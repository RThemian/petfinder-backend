const express = require('express');
const request = require('request');
const router = express.Router();
const PetFinder = require('../models/petFinder');

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await PetFinder.find({}));
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong'});
    };
});

// Create
router.post('/', async (req, res) => {
    try {
        res.status(201).json(await PetFinder.create(req.body));
    } catch (error) {
       res.status(400).json({ message: 'Something went wrong'}); 
    };
});

module.exports = router;