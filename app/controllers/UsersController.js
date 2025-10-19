// controllers/UserController.js
const makeController = require('./GenericController');
const UserModel = require('../models/Users');

// Create a generic controller for the User model
const userController = makeController(UserModel);

// Export it so other files (like your server or router) can use it
module.exports = userController;
