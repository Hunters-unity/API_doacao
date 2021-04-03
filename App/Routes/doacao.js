const express = require('express');
const router = express.Router();
const DoacaoController = require('../Controllers/DoacaoController')

router.get('/', DoacaoController.lista)
router.get('/:doacaoID', DoacaoController.busca)
router.post('/', DoacaoController.cadastro)
router.delete('/:doacaoID', DoacaoController.excluir)
router.patch('/:id',DoacaoController.listaMaterial)
router.put('/:id',DoacaoController.listaItem)

module.exports = app => app.use('/doacao', router);