const mongoose = require('../../Database');


const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    ano_letivo: {
        type: String,
        require: true,
    },
    escola: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escola',
        require: true,
    },
    lista: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Lista',
        require: true,
    },
    reponsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsavel',
        require: true
    },
    dataAdicao: {
        type: Date,
        default: Date.now,
    },
});

const Aluno = mongoose.model('Aluno', AlunoSchema);

module.exports = Aluno;
