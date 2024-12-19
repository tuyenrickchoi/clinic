const bookingModel = require('../models/booking.models');

module.exports = {
    createBooking: async (req, res) => {
        try {
            const newBooking = await bookingModel.create(req.body);
            return res.status(201).json(newBooking);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getAllBookings: async (req, res) => {
        try {
            const bookings = await bookingModel.find().sort({ createdAt: -1 });
            return res.status(200).json(bookings);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}; 