
const express = require('express');
const router = express.Router();
const {
    createBooking,
    getAllBookings,
    deleteBooking
} = require('../controllers/booking.controller');

router.post('/', createBooking);
router.get('/', getAllBookings);
router.delete('/:id', deleteBooking); 
module.exports = router; 