const makeController = require('./GenericController');
const ContactModel = require('../models/Contacts');

// Create a generic controller for the Contact model
const contactController = makeController(ContactModel);

// Export it so other files (like your server or router) can use it
module.exports = contactController;