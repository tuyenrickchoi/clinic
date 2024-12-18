const express = require('express');
const router = express.Router();

const {
    createMassage,
    getMassages,
    getMassageById,
    updateMassage,
    deleteMassage
} = require('../controllers/massage_treatments.controller');

router.get('/', getMassages);
router.post('/', createMassage);
router.get('/:id', getMassageById);
router.put('/:id', updateMassage);
router.delete('/:id', deleteMassage);

module.exports = router; 