const massageModel = require('../models/massage_treatments.models');

module.exports = {
    createMassage: async (req, res) => {
        try {
            const body = req.body;
            const newMassage = await massageModel.create(body);
            return res.status(201).json(newMassage);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getMassages: async (req, res) => {
        try {
            const massages = await massageModel.find();
            return res.status(200).json(massages);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getMassageById: async (req, res) => {
        try {
            const id = req.params.id;
            const massage = await massageModel.findById(id);
            if (!massage) {
                return res.status(404).json({ message: "Massage treatment not found" });
            }
            return res.status(200).json(massage);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateMassage: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedMassage = await massageModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedMassage) {
                return res.status(404).json({ message: "Massage treatment not found" });
            }
            return res.status(200).json(updatedMassage);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteMassage: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedMassage = await massageModel.findByIdAndDelete(id);
            if (!deletedMassage) {
                return res.status(404).json({ message: "Massage treatment not found" });
            }
            return res.status(200).json(deletedMassage);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}; 