const mongoose = require('../../Database');


const listaDoacaoSchema = new mongoose.Schema({
    itens: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'ItemDoacao',
        require: true,
    },
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
    },
    dataPedido: {
        type: Date,
        default: Date.now,
    },
    enderecoEscola: {
        type: String,
        require: true
    }
});

const lista = mongoose.model('Lista', listaDoacaoSchema);

module.exports = lista;
