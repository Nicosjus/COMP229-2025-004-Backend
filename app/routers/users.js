var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

router.get('/getuser/:userId', userController.getUser);

module.exports = router;