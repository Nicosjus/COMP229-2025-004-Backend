const makeController = require('./GenericController');
const ProjectModel = require('../models/Projects');

// Create a generic controller for the Project model
const projectController = makeController(ProjectModel);

// Export it so other files (like your server or router) can use it
module.exports = projectController;
