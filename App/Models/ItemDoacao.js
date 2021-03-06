const mongoose = require('../../Database');


const itemDoacaoSchema = new mongoose.Schema({
    item: {
        type: String,
        require: true,
    },
    doado: {
        type: Boolean,
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
