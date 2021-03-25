const express = require('express');
const router = express.Router();
const EscolaController = require('../Controllers/EscolaController')

router.get('/', EscolaController.index)


module.exports = router;