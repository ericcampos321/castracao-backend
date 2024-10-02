const express = require('express');
const router = express.Router();

const RolesController = require('../../controllers/RolesController');

router.get('/getRoles', RolesController.getRolesList);
router.post('/insertRoles', RolesController.insertRoles);
router.delete('/deleteRoles/:id', RolesController.deleteRoles);
router.patch('/updateRoles/:id', RolesController.updateRoles);

module.exports = router;