const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');

const router = express.Router();

// Handle POST /api/login
router.post('/', AuthenticationController.login);

module.exports = router;
