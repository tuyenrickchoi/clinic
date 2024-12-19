const facialRoutes = require('./facial_treatments.router');
const massageRoutes = require('./massage_treatments.router');
const spaRoutes = require('./spa_treatments.router');
const galleryRoutes = require('./gallery.router');
const bookingRoutes = require('./booking.router');

module.exports = (app) => {
    app.use('/api/facials', facialRoutes);
    app.use('/api/massages', massageRoutes);
    app.use('/api/spas', spaRoutes);
    app.use('/api/gallery', galleryRoutes);
    app.use('/api/bookings', bookingRoutes);
};