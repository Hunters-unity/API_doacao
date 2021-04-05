const mongoose = require('../../Database');

const PerfilSchema = new mongoose.Schema({
    nome_responsavel:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },

    senha: {
        type: String,
        require: true,
    }
});

const Perfil = mongoose.model('Perfil', PerfilSchema);

module.exports = Perfil