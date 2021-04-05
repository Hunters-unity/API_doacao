const express = require('express');
const router = express.Router();
const EscolaController = require('../Controllers/EscolaController')

router.post('/cadastrar', EscolaController.cadastrar);
router.get('/listar', EscolaController.listar);
router.get('/buscar/:id', EscolaController.listarPorId);
router.delete('/excluir/:id', EscolaController.excluir);


module.exports =  app => app.use('/escolas', router);