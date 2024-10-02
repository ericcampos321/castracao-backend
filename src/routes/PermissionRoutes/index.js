const express = require('express');
const router = express.Router();

const PermissionController = require('../../controllers/PermissionController');

router.get('/permissionList', PermissionController.getPermissionList);
router.post('/permissionInsert', PermissionController.insertPermission);
router.delete('/permissionDelete/:id', PermissionController.deletePermission);
router.patch('/permissionUpdate/:id', PermissionController.updatePermission);

module.exports = router;