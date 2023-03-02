const PetFinder = require ('../models/petFinder');

const getPet = async (req, res) => {
    try {
        res.status(200).json(await PetFinder.find({}));
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong'});
    };
};

const createPet = async (req, res) => {
    try {
        res.status(201).json(await PetFinder.create(req.body));
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong'});
    };
};

const deletePet = async (req, res) => {
    try {
      res.status(200).json(await PetFinder.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
  };

const showPet = async (req, res) => {
    try {
      res.status(200).json(
        await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
  };

  const updatePet = async (req, res) => {
    try {
      res.status(200).json(
        await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
  };

module.exports = {
    getPet,
    createPet,
    deletePet,
    showPet,
    updatePet
};