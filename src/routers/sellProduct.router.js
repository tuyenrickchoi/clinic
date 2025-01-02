const express = require('express');
const router = express.Router();
const {
    createSellProduct,
    getAllSellProducts
} = require('../controllers/sellProduct.controller');

router.post('/', createSellProduct);
router.get('/', getAllSellProducts);

module.exports = router;