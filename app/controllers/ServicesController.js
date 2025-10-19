const makeController = require('./GenericController');
const ServiceModel = require('../models/Services');
// Create a generic controller for the Service model
const serviceController = makeController(ServiceModel);
// Export it so other files (like your server or router) can use it
module.exports = serviceController;