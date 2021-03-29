const mongoose = require('../../Database');


const doacaoSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    anonimo: {
        type: Boolean,
        require: true,
        default: false
    },
    email: {
        type: String
    },
    telefone: {
        type: Number,
    },
    itens_doados:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ItemDoacao'
    }],
    dataDoacao: {
        type: Date,
        default: Date.now
    }
});

const Doacao = mongoose.model('Doacao', doacaoSchema);

module.exports = Doacao;
