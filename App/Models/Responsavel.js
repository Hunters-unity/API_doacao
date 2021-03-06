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
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    perfil:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Perfil',
        require: true
    },
    alunos: {
        type: [mongoose.Schema.Types.ObjectId], 
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
