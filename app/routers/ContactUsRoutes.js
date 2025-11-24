const createRouter = require('../factories/RouteFactory');
const ContactUsController = require('../controllers/ContactUsController');

const ContactUsRouter = createRouter(ContactUsController, 'id');

module.exports = ContactUsRouter;
