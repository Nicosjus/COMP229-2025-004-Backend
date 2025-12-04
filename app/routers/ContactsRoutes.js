
const createRouter = require('../factories/RouteFactory');
const ContactController = require('../controllers/ContactsController');
const ContactRouter = createRouter(ContactController, 'id',{
  isGetAll:{
    isProtected:false
  },
  isGetOne:{
    isProtected:false
  },
  isUpdate:{
    isProtected:true
  },
  isDelete:{
    isProtected:true
  },
  isDeleteAll:{
    isProtected:true
  },
  isCreate:{
    isProtected:true    
  }
  
  },
  );
module.exports = ContactRouter; 
