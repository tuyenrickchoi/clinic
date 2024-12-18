const facialRoutes = require('./facial_treatments.router');
const massageRoutes = require('./massage_treatments.router');
const spaRoutes = require('./spa_treatments.router');

module.exports = (app) => {
    app.use('/api/facials', facialRoutes);
    app.use('/api/massages', massageRoutes);
    app.use('/api/spas', spaRoutes);
};