const router = require('express').Router();

const CityController = require('../../controllers/CityController');

router.post('/insertCity', CityController.insertCity);
router.get('/getCity/:id', CityController.getCity);
router.delete('/deleteCity/:id', CityController.deleteCity);
router.patch('/updateCity/:id', CityController.updateCity);

module.exports = router;