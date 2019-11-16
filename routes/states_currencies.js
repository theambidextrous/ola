const express = require('express');
const router = express.Router();
const olaController = require('../app/api/controllers/states_currencies');
//get
router.get('/', olaController.getAll);
router.get('/:id', olaController.getById);
router.get('/currencies/:alpha2Code', olaController.getByCountry);
//post
router.post('/create', olaController.create);
module.exports = router;