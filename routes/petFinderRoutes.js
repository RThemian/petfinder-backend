const express = require('express');
const router = express.Router();
const PetFinder = require('../models/petFinder');
const petFinderController = require('../controllers/petFinderController');

router.get('/', petFinderController.getPets);

// Create
router.post('/', petFinderController.createPets);


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