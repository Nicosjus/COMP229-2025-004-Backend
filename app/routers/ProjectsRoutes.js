
const createRouter = require('../factories/RouteFactory');
const ProjectController = require('../controllers/ProjectsController');
const ProjectRouter = createRouter(ProjectController, 'id',{
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
module.exports = ProjectRouter;
