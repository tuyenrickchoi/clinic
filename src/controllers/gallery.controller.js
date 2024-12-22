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
    },
    getGalleryItemById: async (req, res) => {
        try {
            const item = await galleryModel.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: "Gallery item not found" });
            }
            return res.status(200).json(item);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getRelatedItems: async (req, res) => {
        try {
            // Lấy tất cả sản phẩm trong gallery
            const relatedItems = await galleryModel.find().limit(6); // Giới hạn số lượng sản phẩm liên quan (tuỳ chọn)
    
            return res.status(200).json(relatedItems);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
