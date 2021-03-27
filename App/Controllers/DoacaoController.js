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

router.get('/:id', async (req,res) =>{
    try{
        const  doacao = await Doacao.findById(req.params.id);

        return res.send({doacao});
    } catch{
        return res.status(400).send( {erro: "erro ao procurar doação" });
    }
})

router.post('/', async (req,res) =>{
    try{
        const doacao = await Doacao.create(req.body);

        return res.send({doacao});
    }
    catch{
        return res.status(400).send( {erro: "erro ao criar nova doação" });
    }
})

router.put('/:id', async (req,res) =>{
    try{

    } catch{
        return res.status(400).send( {erro: "erro ao excluir doação" });
    }
})

router.delete('/:id', async (req,res) =>{
    try{
        await Doacao.findByIdAndRemove(req.params.id);
    } catch{
        return res.status(400).send( {erro: "erro ao procurar doação" });
    }
})

 module.exports = app => app.use('/doacao', router);