const PetFinder = require ('../models/petFinder');

const getPets = async (req, res) => {
    try {
        res.status(200).json(await PetFinder.find({ createdBy: req.user.uid }));
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong'});
    };
};

const createPets = async (req, res) => {
    try {

      req.body.createdBy = req.user.uid;
        res.status(201).json(await PetFinder.create(req.body));
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong'});
    };
};

const deletePets = async (req, res) => {
    try {
      res.status(200).json(await PetFinder.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    };
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
    updatePets
};