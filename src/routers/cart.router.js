const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCart, deleteFromCart, clearCart } = require('../controllers/cart.controller');

router.post('/', addToCart);        // Thêm sản phẩm vào giỏ hàng
router.get('/', getCart);          // Lấy danh sách sản phẩm trong giỏ hàng
router.patch('/:id', updateCart);  // Cập nhật số lượng sản phẩm
router.delete('/:id', deleteFromCart); // Xóa sản phẩm khỏi giỏ hàng
router.delete('/clear', clearCart); // Xóa toàn bộ giỏ hàng

module.exports = router;
