const express = require('express');
const router = express.Router();
const DoacaoController = require('../Controllers/DoacaoController')

router.get('/material/:id', DoacaoController.listaMaterial)
router.get('/item/:id', DoacaoController.listaItem)

module.exports = app => app.use('/lista', router);