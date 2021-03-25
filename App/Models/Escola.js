const mongoose = require('../../Database');

const EscolaSchema = new mongoose.Schema({
    nome: {
        type: String,
        unique: true,
        require: true,
    },
    cep: {
        type: int,
        require: true,
    },
    endereco: {
        type: String,
        unique: true,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    cidade: {
        type: String,
        require: true,
    },
    bairro: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        require: true,
    },
    telefone: {
        type: long,
        require: true,
    },
    dataAdicao: {
        type: Date,
        default: Date.now,
    },
    logo: {
        type: binData
    },
});

const Escola = mongoose.model('Escola', EscolaSchema);

module.exports = Escola;
