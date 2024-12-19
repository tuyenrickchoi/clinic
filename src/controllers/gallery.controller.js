const galleryModel = require('../models/gallery.models');

module.exports = {
    createGalleryItem: async (req, res) => {
        try {
            const newItem = await galleryModel.create(req.body);
            return res.status(201).json(newItem);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getAllGalleryItems: async (req, res) => {
        try {
            const items = await galleryModel.find().sort({ createdAt: -1 });
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    deleteGalleryItem: async (req, res) => {
        try {
            const deletedItem = await galleryModel.findByIdAndDelete(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ message: "Gallery item not found" });
            }
            return res.status(200).json(deletedItem);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}; 