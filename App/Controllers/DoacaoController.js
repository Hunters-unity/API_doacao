const express = require('express');

const Escola = require('../Models/Escola');

const router = express.Router();


router.get('/', async (req,res) =>{
    res.send("Olá mundo")
})


 module.exports = app => app.use('/escola', router);