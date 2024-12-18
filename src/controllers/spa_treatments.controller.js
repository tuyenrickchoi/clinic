const spaModel = require('../models/spa_treatments.models');

module.exports = {
    createSpa: async (req, res) => {
        try {
            const body = req.body;
            const newSpa = await spaModel.create(body);
            return res.status(201).json(newSpa);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getSpas: async (req, res) => {
        try {
            const spas = await spaModel.find();
            return res.status(200).json(spas);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getSpaById: async (req, res) => {
        try {
            const id = req.params.id;
            const spa = await spaModel.findById(id);
            if (!spa) {
                return res.status(404).json({ message: "Spa treatment not found" });
            }
            return res.status(200).json(spa);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateSpa: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedSpa = await spaModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedSpa) {
                return res.status(404).json({ message: "Spa treatment not found" });
            }
            return res.status(200).json(updatedSpa);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteSpa: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedSpa = await spaModel.findByIdAndDelete(id);
            if (!deletedSpa) {
                return res.status(404).json({ message: "Spa treatment not found" });
            }
            return res.status(200).json(deletedSpa);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}; 