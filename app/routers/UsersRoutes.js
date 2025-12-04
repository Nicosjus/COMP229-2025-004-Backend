const createRouter = require('../factories/RouteFactory');
const userController = require('../controllers/UsersController');

 const UserRouter = createRouter(userController, 'id',{
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
         isProtected:false   
     }
 });

module.exports = UserRouter;
