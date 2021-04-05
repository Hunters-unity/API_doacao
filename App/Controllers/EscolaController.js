const Escola = require('../Models/Escola')

const EscolaController = {
    cadastrar: (req, res) => {
        try {
            const { nome, cep, endereco, estado, cidade, bairro, tipo, telefone, numero } = req.body;
            if (nome !== undefined && endereco !== undefined && bairro !== undefined && cep !== undefined) {

                Escola.create({ nome, cep, endereco, estado, cidade, bairro, tipo, telefone, numero })
                    .then(escola => {
                        return res.status(201).send({ escola })
                    })
                    .catch(error => {
                        return res.status(400).send({ erro: error.message })
                    })
            } else {
                return res.status(400).send({ erro: "Erro ao cadastrar escola" });
            }
        } catch (error) {
            return res.status(400).send({ erro: error.message });
        }
    },

    listar: async (req, res) => {
        try {
            const escolas = await Escola.find().limit(5);


            return res.status(200).send({ escolas });
        } catch (error) {
            return res.status(400).send({ erro: error.message });
        }
    },

    excluir: async (req, res) => {
        try {
            const escola = await Escola.findByIdAndRemove(req.params.id);

            if (escola !== null) {
                res.status(200).send({ msg: `Escola ${escola.id} removida com sucesso` });
            } else {
                res.status(400).send({ erro: "Escola não encontrada" });
            }
        } catch (error) {
            return res.status(400).send({ erro: error.message });
        }
    },
    listarPorCidade: async (req, res) => {
        try {
            const escola = await Escola.distinct("nome", { cidade: req.params.id })
            if (escola !== null) {
                res.status(200).send(escola)
            }
            else {
                return res.status(400).send({ erro: "nenhuma escola encontrada" })
            }
        } catch {
            return res.status(400).send({ erro: error.message });
        }
    },
    listarPorEstado: async (req, res) => {
        try {
            const escola = await Escola.distinct("cidade", { estado: req.params.id })
            if (escola !== null) {
                res.status(200).send(escola)
            }
            else {
                return res.status(400).send({ erro: "nenhuma escola encontrada" })
            }
        } catch {
            return res.status(400).send({ erro: error.message });
        }
    },
    listarPorId: async (req, res) => {
        try {
            const escola = await (await Escola.findById(req.params.id));

            return res.send({ escola });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar escola" });
        }
    }
}

module.exports = EscolaController;