const makeController = require('./GenericController');
const AboutUsModel = require('../models/AboutUs');

const aboutUsController = makeController(AboutUsModel);

module.exports = aboutUsController;
