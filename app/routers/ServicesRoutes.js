
const createRouter = require('../factories/RouteFactory');
 const ServiceController = require('../controllers/ServicesController');
const ServiceRouter = createRouter(ServiceController, 'id',{
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
});
module.exports = ServiceRouter;