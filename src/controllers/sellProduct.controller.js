const SellProduct = require('../models/sellProduct.models');

module.exports = {
    createSellProduct: async (req, res) => {
        try {
            const sellProduct = new SellProduct(req.body);
            await sellProduct.save();
            res.status(201).send(sellProduct);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    getAllSellProducts: async (req, res) => {
        try {
            const sellProducts = await SellProduct.find().sort({ createdAt: -1 });
            res.status(200).json(sellProducts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteSellProduct: async (req, res) => {
        try {
            const sellProduct = await SellProduct.findByIdAndDelete(req.params.id);
            if (!sellProduct) {
                res.status(404).json({ message: 'Sell product not found' });
            }
            res.status(200).json(sellProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};