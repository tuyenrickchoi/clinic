const express = require('express');
const router = express.Router();
const {
    createBooking,
    getAllBookings
} = require('../controllers/booking.controller');

router.post('/', createBooking);
router.get('/', getAllBookings);

module.exports = router; 