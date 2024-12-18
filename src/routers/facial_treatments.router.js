const express = require('express');
const router = express.Router();

const {
    createFacial,
    getFacials,
    getFacialById,
    updateFacial,
    deleteFacial
} = require('../controllers/facial_treatments.controller');

router.get('/', getFacials);
router.post('/', createFacial);
router.get('/:id', getFacialById);
router.put('/:id', updateFacial);
router.delete('/:id', deleteFacial);

module.exports = router;
