const mongoose = require('../../Database');
const Doacao = require('./Doacao')

const ItemDoacaoSchema = new mongoose.Schema({
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
        type: Boolean,
        require: true,
        default: false
    },
    doador: {
        type: {Doacao}
    }
});

const ItemDoacao = mongoose.model('Itemdoacao', ItemDoacaoSchema);

module.exports = ItemDoacao;
