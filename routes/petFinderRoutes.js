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
      console.log(req.body)
        res.status(201).json(await PetFinder.create(req.body));
    } catch (error) {
      console.log(error)
       res.status(400).json({ message: 'Something went wrong'}); 
       
    };
});

//delete
router.delete('/:id', async (req, res) => {
    try {
      res.status(200).json(await PetFinder.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });
  
//show
router.get('/:id', async (req, res) => {
    try {
      res.status(200).json(await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });

  //update
  router.put('/:id', async (req, res) => {
    try {
      res.status(200).json(
        await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });
  

module.exports = router;