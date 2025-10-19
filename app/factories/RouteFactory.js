// RouteFactory.js
const express = require('express');

function createRouter(controller,idParam = 'id') {
  const router = express.Router();

  // Standard REST routes
  router.get('/', controller.getAll);
  router.post('/', controller.create);
  router.get(`/:${idParam}`, controller.getOne || controller.getUser);  // supports both naming styles
  router.put(`/:${idParam}`, controller.update);
  router.delete(`/:${idParam}`, controller.remove);
  router.delete('/', controller.removeAll); //delete all records


  return router;
}

module.exports = createRouter;

