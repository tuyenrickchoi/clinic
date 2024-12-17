const facialRoutes = require('./facial_treatments.router');


module.exports = (app) => {
    app.use('/api/facials', facialRoutes);
};