const makeController = require('./GenericController');
const HomeModel = require('../models/Home');

const homeController = makeController(HomeModel);

module.exports = homeController;
