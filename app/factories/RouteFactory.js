// RouteFactory.js
const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');

function createRouter(controller, idParam = 'id', options = {}) {
  const router = express.Router();

  // Default options for route protection
  const defaultOptions = {
    isGetAll: { isProtected: false },
    isGetOne: { isProtected: false },
    isUpdate: { isProtected: false },
    isDelete: { isProtected: false },
    isDeleteAll: { isProtected: false },
    isCreate: { isProtected: false },
  };

  const finalOptions = { ...defaultOptions, ...options };

  // Standard REST routes
  if (finalOptions.isGetAll.isProtected) {
    router.get('/', AuthenticationController.verifyToken, controller.getAll);
  } else {
    router.get('/', controller.getAll);
  }
  if (finalOptions.isGetOne.isProtected) {
    router.get(`/:${idParam}`, AuthenticationController.verifyToken, controller.getOne);
  } else {
    router.get(`/:${idParam}`, controller.getOne);
  }
  if (finalOptions.isUpdate.isProtected) {
    router.put(`/:${idParam}`, AuthenticationController.verifyToken, controller.update);
  } else {
    router.put(`/:${idParam}`, controller.update);
  }
  if (finalOptions.isDelete.isProtected) {
    router.delete(`/:${idParam}`, AuthenticationController.verifyToken, controller.remove);
  } else {
    router.delete(`/:${idParam}`, controller.remove);
  }
  if (finalOptions.isCreate.isProtected) {
    router.post('/', AuthenticationController.verifyToken, controller.create);
  } else {
    router.post('/', controller.create);
  }
  return router;
}

module.exports = createRouter;
