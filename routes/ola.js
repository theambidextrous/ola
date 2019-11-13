const express = require('express');
const router = express.Router();
const olaController = require('../app/api/controllers/ola');
//get
router.get('/', olaController.getAll);
router.get('/:locationid', olaController.getById);
router.get('/countries/:countrycode', olaController.getByCountry);
router.get('/regions/:region', olaController.getByRegion);
router.get('/categories/:category', olaController.getByCategory);
router.get('/locations/:location', olaController.getByLocation);
//post
router.post('/create', olaController.create);
//put/update
router.put('/:id', olaController.updateById);
//delete
router.delete('/:id', olaController.deleteById);
module.exports = router;