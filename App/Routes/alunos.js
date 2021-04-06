const express = require('express');
const router = express.Router();
const AlunoController = require('../Controllers/AlunoController')

router.post('/cadastrar', AlunoController.cadastrar);
router.get('/listar', AlunoController.listar);
router.get('/buscar/:id', AlunoController.buscar);

module.exports =  app => app.use('/aluno', router);