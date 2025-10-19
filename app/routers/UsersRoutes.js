const createRouter = require('../factories/RouteFactory');
const userController = require('../controllers/UsersController');

 const UserRouter = createRouter(userController, 'id');

module.exports = UserRouter;
