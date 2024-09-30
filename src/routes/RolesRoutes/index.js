const express = require('express');
const router = express.Router();

const RolesController = require('../../controllers/RolesController');

router.get('/roles', RolesController.getRolesList);

module.exports = router;