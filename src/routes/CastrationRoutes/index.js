const router = require('express').Router();

const CastrationController = require('../../controllers/CastrationController');

router.post('/insertCads', CastrationController.insertCads);
router.get('/getCads/:idCastration', CastrationController.getCads);
router.patch('/updateCads/:id', CastrationController.updateCads);
router.delete('/deleteCads/:id', CastrationController.deleteCads);

module.exports = router;