const facialModel = require('../models/facial_treatments.models');

module.exports = {
    createFacial: async (req, res) => {
        try {
            const body = req.body;
            const newFacial = await facialModel.create(body);
            return res.status(201).json(newFacial);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getFacials: async (req, res) => {
        try {
            const facials = await facialModel.find();
            return res.status(200).json(facials);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getFacialById: async (req, res) => {
        try {
            const id = req.params.id;
            const facial = await facialModel.findById(id);
            if (!facial) {
                return res.status(404).json({ message: "Facial treatment not found" });
            }
            return res.status(200).json(facial);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateFacial: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedFacial = await facialModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedFacial) {
                return res.status(404).json({ message: "Facial treatment not found" });
            }
            return res.status(200).json(updatedFacial);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteFacial: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedFacial = await facialModel.findByIdAndDelete(id);
            if (!deletedFacial) {
                return res.status(404).json({ message: "Facial treatment not found" });
            }
            return res.status(200).json(deletedFacial);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
