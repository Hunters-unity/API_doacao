const mongoose = require('../../Database');


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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemDoacao'
    }
});

const ItemDoacao = mongoose.model('Itemdoacao', ItemDoacaoSchema);

module.exports = ItemDoacao;
