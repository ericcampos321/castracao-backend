const router = require('express').Router();

const UserController = require('../../controllers/UserController');

router.post('/register', UserController.createUser);
router.put('/update', UserController.updateUser);

module.exports = router;