const express = require('express');

const Doacao = require('../Models/Doacao');
const ItemDoacao = require('../Models/ItemDoacao');

const router = express.Router();


router.get('/', async (req,res) =>{
    try{
        const  doacao = await Doacao.find().limit(5);

        return res.send({doacao});
    } catch{
        return res.status(400).send( {erro: "erro ao procurar doações" });
    }
})

router.get('/:doacaoID', async (req,res) =>{
    try{
        const  doacao = await Doacao.findById(req.params.doacaoID);

        return res.send({doacao});
    } catch{
        return res.status(400).send( {erro: "erro ao procurar doação" });
    }
})

router.post('/', async (req,res) =>{
    try{
        const doacao = await Doacao.create(req.body);

        return res.status(201).send({doacao});
    }
    catch{
        return res.status(400).send( {erro: "erro ao criar nova doação" });
    }
})

router.put('/:doacaoID', async (req,res) =>{
    try{
        res.send("rota de edição não configurada")
    } catch{
        return res.status(400).send( {erro: "erro ao excluir doação" });
    }
})

router.delete('/:doacaoID', async (req,res) =>{
    try{
        await Doacao.findByIdAndRemove(req.params.doacaoID);
        res.status(204).send();
    } catch{
        return res.status(400).send( {erro: "erro ao procurar doação" });
    }
})

 module.exports = app => app.use('/doacao', router);