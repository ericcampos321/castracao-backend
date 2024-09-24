const express = require('express');
const router = express.Router();

const LoginController = require('../../controllers/LoginController');

// Chamando o método diretamente a partir da instância exportada
router.post('/login', LoginController.login);

module.exports = router;
