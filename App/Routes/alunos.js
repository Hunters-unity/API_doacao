const express = require('express');
const router = express.Router();
const AlunoController = require('../Controllers/AlunoController')

router.post('/cadastrar', AlunoController.cadastrar);
// router.get('/listar', AlunoController.buscar);
// router.delete('/excluir/:id', AlunoController.excluir);


module.exports = router;