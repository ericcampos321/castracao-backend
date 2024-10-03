const router = require('express').Router();

const CastrationController = require('../../controllers/CastrationController');

router.post('/insertCads', CastrationController.insertCads);

module.exports = router;