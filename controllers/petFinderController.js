const PetFinder = require ('../models/petFinder');
const PetDatabase = require ('../models/petDatabase');

const getPets = async (req, res) => {
  try {
    //filter out by useremail match
    res.status(200).json(await PetFinder.find({ useremail: req.user.email }));
     // res.status(200).json(await PetFinder.find({ }));
  } catch (error) {
      res.status(400).json({ message: 'Something went wrong'});
  };
};

const createPets = async (req, res) => {
  try {
    req.body.createdBy = req.user.uid;
    console.log("EMAIL USER", req.user.email)
    req.body.useremail= req.user.email;

    console.log(req.body)
      res.status(201).json(await PetFinder.create(req.body));
  } catch (error) {
    console.log(error)
     res.status(400).json({ message: 'Something went wrong'}); 
     
  };
};

const deletePets = async (req, res) => {
  console.log("DELETE", req.params.id)
  try {
    // res.status(200).json(await PetFinder.findByIdAndDelete(req.params.id));
    // try both PetFinder and PetDatabase to findByIdAndDelete
    res.status(200).json(await PetFinder.findByIdAndDelete(req.params.id));
    console.log("DELETE in PetFinder", req.params.id)
    res.status(200).json(await PetDatabase.findByIdAndDelete(req.params.id));
    console.log("DELETE in PetDatabase", req.params.id)
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
  };

// Save animal data to petDatabase collection
const saveAnimalData = async (req, res) => {
  try {
    console.log("saveAnimalData on Backend called", req.body);
    const animalDataArray = req.body;

    // Iterate through the animalDataArray and save each animal object
    const savedAnimalData = await Promise.all(
      animalDataArray.map(async (animalData) => {
        const newAnimalData = new PetDatabase(animalData);
        return await newAnimalData.save();
      })
    );

    res.status(201).json(savedAnimalData);
  } catch (error) {
    res.status(400).json({ message: "Error saving animal data" });
  }
};

// Get all animal data from petDatabase collection
const getAnimalData = async (req, res) => {
  try {
    const animalData = await PetDatabase.find({}).sort({ published_at: 1 });
    res.status(200).json(animalData);
  } catch (error) {
    res.status(400).json({ message: "Error getting animal data" });
  }
};



const showPets = async (req, res) => {
    try {
      res.status(200).json(
        await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
  };

  const updatePets = async (req, res) => {
    try {
      res.status(200).json(
        await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
  };

module.exports = {
    getPets,
    createPets,
    deletePets,
    showPets,
    updatePets,
    saveAnimalData,
    getAnimalData
};