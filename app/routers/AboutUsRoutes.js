const createRouter = require('../factories/RouteFactory');
const AboutUsController = require('../controllers/AboutUsController');

const AboutUsRouter = createRouter(AboutUsController, 'id');

module.exports = AboutUsRouter;
