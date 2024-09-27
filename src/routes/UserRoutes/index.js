const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.post('/register', UserController.createUser);
router.patch('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);


module.exports = router;