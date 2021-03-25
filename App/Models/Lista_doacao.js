const mongoose = require('../../Database');
//const Aluno = require('./Aluno')
const ItemDoacao = require('./Item_doacao')

const ListaDoacaoSchema = new mongoose.Schema({
    itens: {
        type: [{ItemDoacao}],
        require: true,
    },
    aluno: {
        type: String,
        require: true,
    },
    dataPedido: {
        type: Date,
        default: Date.now,
    },
    enderecoEscola:{
        type: String,
        require: true
    }
});

const Lista = mongoose.model('Lista', ListaDoacaoSchema);

module.exports = Lista;
