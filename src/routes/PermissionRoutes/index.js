const express = require('express');
const router = express.Router();

const PermissionController = require('../../controllers/PermissionController');

router.get('/list', PermissionController.getPermissionList);

module.exports = router;