const express = require('express');
const router = express.Router();
const ResponsavelController = require('../Controllers/ResponsavelController')

router.post('/cadastrar', ResponsavelController.cadastrar);
router.get('/buscar/:idPerfil', ResponsavelController.buscar);

module.exports =  app => app.use('/responsavel', router);