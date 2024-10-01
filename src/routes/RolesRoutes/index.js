const express = require('express');
const router = express.Router();

const RolesController = require('../../controllers/RolesController');

router.get('/getRoles', RolesController.getRolesList);
router.post('/insertRoles', RolesController.insertRoles);

module.exports = router;