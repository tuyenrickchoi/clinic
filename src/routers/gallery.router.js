const express = require('express');
const router = express.Router();
const {
    createGalleryItem,
    getAllGalleryItems,
    deleteGalleryItem,
    getGalleryItemById // Thêm hàm mới

} = require('../controllers/gallery.controller');

router.post('/', createGalleryItem);
router.get('/', getAllGalleryItems);
router.get('/:id', getGalleryItemById); // Thêm route lấy chi tiết sản phẩm

router.delete('/:id', deleteGalleryItem);

module.exports = router;
