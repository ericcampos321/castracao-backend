const router = require('express').Router();

const CityController = require('../../controllers/CityController');

router.post('/insertCity', CityController.insertCity);

module.exports = router;