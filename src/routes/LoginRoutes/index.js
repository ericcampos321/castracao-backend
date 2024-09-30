const express = require('express');
const router = express.Router();

const LoginController = require('../../controllers/LoginController');

router.post('/login', LoginController.login);

module.exports = router;
