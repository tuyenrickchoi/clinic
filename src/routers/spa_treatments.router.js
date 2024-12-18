const express = require('express');
const router = express.Router();

const {
    createSpa,
    getSpas,
    getSpaById,
    updateSpa,
    deleteSpa
} = require('../controllers/spa_treatments.controller');

router.get('/', getSpas);
router.post('/', createSpa);
router.get('/:id', getSpaById);
router.put('/:id', updateSpa);
router.delete('/:id', deleteSpa);

module.exports = router; 