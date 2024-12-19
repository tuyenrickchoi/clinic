const express = require('express');
const router = express.Router();
const {
    createGalleryItem,
    getAllGalleryItems,
    deleteGalleryItem
} = require('../controllers/gallery.controller');

router.post('/', createGalleryItem);
router.get('/', getAllGalleryItems);
router.delete('/:id', deleteGalleryItem);

module.exports = router; 