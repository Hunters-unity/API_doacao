const express = require('express');
const router = express.Router();
const ResponsavelController = require('../Controllers/ResponsavelController')

router.post('/cadastrar', ResponsavelController.cadastrar);

module.exports =  app => app.use('/responsavel', router);