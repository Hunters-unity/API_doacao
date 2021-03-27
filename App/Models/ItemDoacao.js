const mongoose = require('../../Database');


const itemDoacaoSchema = new mongoose.Schema({
    item: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        require: true,
    },
    valor: {
        type: Number,
        require: true,
    },
    doado: {
        type: String,
        require: true,
        default: false
    },
    doador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doacao'
    }
});

const ItemDoacao = mongoose.model('ItemDoacao', itemDoacaoSchema);

module.exports = ItemDoacao;
