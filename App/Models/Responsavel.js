const mongoose = require('../../Database');


const ResponsavelSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    cpf: {
        type: Number,
        require: true,
    },
    telefone: {
        type: Number,
        require: true,
    },
    perfil:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Perfil',
        require: true
    },
    aluno: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Aluno',
        require: true
    },
    dataAdicao: {
        type: Date,
        default: Date.now,
    },
});

const Responsavel = mongoose.model('Responsavel', ResponsavelSchema);

module.exports = Responsavel;
