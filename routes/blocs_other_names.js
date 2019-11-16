const express = require('express');
const router = express.Router();
const olaController = require('../app/api/controllers/blocs_other_names');
//get
router.get('/', olaController.getAll);
router.get('/:id', olaController.getById);
router.get('/bloc/:bloc', olaController.getByBloc);
//post
router.post('/create', olaController.create);
module.exports = router;