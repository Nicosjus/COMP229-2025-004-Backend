const makeController = require('./GenericController');
const ContactUsModel = require('../models/ContactUs');

// Create a generic controller for the ContactUs model
const contactUsController = makeController(ContactUsModel);

// Export it so other files (like your server or router) can use it
module.exports = contactUsController;   