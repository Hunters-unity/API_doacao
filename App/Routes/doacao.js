const express = require('express');
const router = express.Router();
const DoacaoController = require('../Controllers/DoacaoController')

router.get('/', DoacaoController.lista)
router.get('/:doacaoID', DoacaoController.busca)
router.post('/', DoacaoController.cadastro)
router.delete('/:doacaoID', DoacaoController.excluir)

module.exports = app => app.use('/doacao', router);