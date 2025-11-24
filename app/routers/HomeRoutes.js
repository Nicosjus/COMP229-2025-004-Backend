const createRouter = require('../factories/RouteFactory');
const HomeController = require('../controllers/HomeController');

const HomeRouter = createRouter(HomeController, 'id');

module.exports = HomeRouter;
