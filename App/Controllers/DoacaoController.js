const Doacao = require('../Models/Doacao');
const ItemDoacao = require('../Models/ItemDoacao');
const lista = require('../Models/ListaDoacao');

const DoacaoController = {

    lista: async (req, res) => {
        try {
            const doacao = await Doacao.find().populate('itens_doados').limit(5);
            return res.send({ doacao });

        } catch {
            return res.status(400).send({ erro: "erro ao procurar doações" });
        }
    },

    busca: async (req, res) => {
        try {
            const doacao = await Doacao.findById(req.params.doacaoID).populate('itens_doados');

            return res.send({ doacao });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar doação" });
        }
    },

    cadastro: async (req, res) => {
        try {
            const { nome, anonimo, email, telefone, itens_doados } = req.body;


            const doacao = await Doacao.create({ nome, anonimo, email, telefone, itens_doados });

            itens_doados.map(async item => {
                await ItemDoacao.updateMany({ _id: item }, { $set: { doador: doacao._id, doado: true } });
            });


            return res.status(201).send({ doacao });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ erro: "erro ao criar nova doação" });
        }
    },

    excluir: async (req, res) => {
        try {
            await Doacao.findByIdAndRemove(req.params.doacaoID);
            res.status(204).send();
        } catch {
            return res.status(400).send({ erro: "erro ao procurar doação" });
        }
    },

    listaMaterial: async (req, res) => {
        try {
            const doacao = await (await lista.findById(req.params.id)).populate('itens');

            return res.send({ doacao });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar doação" });
        }
    },
    listaItem: async (req, res) => {
        try {
            const doacao = await (await ItemDoacao.findById(req.params.id));

            return res.send({ doacao });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar doação" });
        }
    }}

module.exports = DoacaoController;


