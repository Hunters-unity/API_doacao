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
        type: int,
    },
    itens_doados: {
        type: [String],
        require: true
    },
    dataDoacao: {
        type: Date,
        default: Date.now
    }
});

const Doacao = mongoose.model('Doacao', doacaoSchema);

module.exports = Doacao;
