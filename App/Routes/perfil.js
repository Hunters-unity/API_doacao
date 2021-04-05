const express = require('express');
const router = express.Router();
const PerfilController = require('../Controllers/PerfilController')

router.post('/cadastrar', PerfilController.cadastrar);
router.post('/logar', PerfilController.logar);


module.exports =  app => app.use('/perfil', router);