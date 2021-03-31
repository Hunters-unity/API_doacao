const express = require('express');
const router = express.Router();
const EscolaController = require('../Controllers/EscolaController')

router.post('/cadastrar', EscolaController.cadastrar);
router.get('/listar', EscolaController.listar);
router.delete('/excluir/:id', EscolaController.excluir);


module.exports = router;