const express = require('express');
const router = express.Router();
const PetFinder = require('../models/petFinder');
const petFinderController = require('../controllers/petFinderController');

// Get all favorite pets linked to useremail
router.get('/', petFinderController.getPets);

// Create favorite pet linked to useremail
router.post('/', petFinderController.createPets);

// get all animal data from petDatabase collection
router.get('/get_animal_data', petFinderController.getAnimalData);


// Save animal data from petfinder API to petDatabase collection
router.post('/save_animal_data', petFinderController.saveAnimalData);


//delete
router.delete('/:id', petFinderController.deletePets);

  
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