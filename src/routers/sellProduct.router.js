const express = require('express');
const router = express.Router();
const {
    createSellProduct,
    getAllSellProducts,
    deleteSellProduct
} = require('../controllers/sellProduct.controller');

router.post('/', createSellProduct);
router.get('/', getAllSellProducts);
router.delete('/:id', deleteSellProduct); 

module.exports = router;