const mongoose = require('../../Database');
const Escola = require('./Escola')
const Lista = require('./Lista_doacao')
const Reponsavel = require('./Responsavel')


const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    ano_letivo: {
        type: Number,
        require: true,
    },
    escola: {
        type: {Escola},
        require: true,
    },
    lista: {
        type: [{Lista}],
        require: true,
    },
    reponsavel: {
        type: {Reponsavel},
        require: true
    },
    dataAdicao: {
        type: Date,
        default: Date.now,
    },
});

const Aluno = mongoose.model('Aluno', AlunoSchema);

module.exports = Aluno;
