
const createRouter = require('../factories/RouteFactory');
const ContactController = require('../controllers/ContactsController');
const ContactRouter = createRouter(ContactController, 'contactId');
module.exports = ContactRouter; 
