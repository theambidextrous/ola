const express = require('express');
const router = express.Router();
const olaController = require('../app/api/controllers/ola');
//get
router.get('/', olaController.getAll);
router.get('/:locationid', olaController.getById);
router.get('/:countrycode', olaController.getByCountry);
router.get('/:region', olaController.getByRegion);
router.get('/:category', olaController.getByCategory);
router.get('/:location', olaController.getByLocation);
//post
router.post('/create', olaController.create);
//put/update
router.put('/:movieId', olaController.updateById);
//delete
router.delete('/:movieId', olaController.deleteById);
module.exports = router;