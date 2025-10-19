
const createRouter = require('../factories/RouteFactory');
const ContactController = require('../controllers/ContactsController');
const ContactRouter = createRouter(ContactController, 'id');
module.exports = ContactRouter; 
