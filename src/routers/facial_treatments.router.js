const express = require('express');
const router = express.Router();

const {
    createFacial,
    getFacials,
    getFacialById,
    updateFacial,
    deleteFacial
} = require('../controllers/facial_treatments.controller');

router.route('/')
    .post(createFacial)
    .get(getFacials);

router.route('/:id')
    .get(getFacialById)
    .put(updateFacial)
    .delete(deleteFacial);

module.exports = router;
