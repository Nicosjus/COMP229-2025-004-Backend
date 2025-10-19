
const createRouter = require('../factories/RouteFactory');
 const ServiceController = require('../controllers/ServicesController');
const ServiceRouter = createRouter(ServiceController, 'serviceId');
module.exports = ServiceRouter;