const router = require('express').Router();

const UserController = require('../../controllers/UserController');


router.post('/userList/:limit/:skip', UserController.getUserList);
router.post('/register', UserController.createUser);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/userDelete/:id', UserController.deleteUser);
router.get('/get/:idUser', UserController.getUser);

module.exports = router;