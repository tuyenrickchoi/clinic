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
    },
    deleteBooking: async (req, res) => { // Đảm bảo hàm này tồn tại
        try {
            const { id } = req.params;
            const deletedBooking = await bookingModel.findByIdAndDelete(id);
            if (!deletedBooking) {
                return res.status(404).json({ message: "Không tìm thấy booking" });
            }
            return res.status(200).json({ message: "Xóa booking thành công" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}; 
