// RouteFactory.js
const express = require('express');
const AuthenticationController = require('./app/controllers/AuthenticationController');

function createRouter(controller,idParam = 'id',options = {}) {
  const router = express.Router();

  // Standard REST routes
  if(options.isGetAll.isProtected){
      router.get('/',AuthenticationController.verifyToken, controller.getAll);
  }else{
    router.get('/', controller.getAll);
  }
  if(options.isGetOne.isProtected){
    router.get(`/:${idParam}`,AuthenticationController.verifyToken, controller.getOne);
  }else{
    router.get(`/:${idParam}`, controller.getOne);
  }
  if(options.isUpdate.isProtected){
    router.put(`/:${idParam}`,AuthenticationController.verifyToken, controller.update);
  }else{
    router.put(`/:${idParam}`, controller.update);
  }
  if(options.isDelete.isProtected){
    router.delete(`/:${idParam}`,AuthenticationController.verifyToken, controller.remove);
  }else{
    router.delete(`/:${idParam}`, controller.remove);
  }
  if(options.isDeleteAll.isProtected){
    router.delete('/',AuthenticationController.verifyToken, controller.removeAll);
  }else{
    router.delete('/', controller.removeAll);
  } 
  if(options.isCreate.isProtected){
    router.post('/',AuthenticationController.verifyToken, controller.create);
  }else{
    router.post('/', controller.create);

  } 
  return router;
}

module.exports = createRouter;
