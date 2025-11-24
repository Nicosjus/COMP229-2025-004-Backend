const createRouter = require('./GenericRoutes');
const ContactUsController = require('../controllers/ContactUsController');
const ContactUsRouter = createRouter(ContactUsController, 'id');
module.exports = ContactUsRouter;