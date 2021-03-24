const mongoose = require('../../Database');

const EscolaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        require: true,
    },
    dataAdicao: {
        type: Date,
        default: Date.now,
    },
});

const Escola = mongoose.model('Escola', EscolaSchema);

module.exports = Escola;
