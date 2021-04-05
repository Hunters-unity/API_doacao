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
        var match = {};

        try {
            Object.keys(req.query).map(function (key, index) {
                if (key !== "limit") {
                    match[key] = req.query[key]
                }
            });
            if (req.query.limit !== undefined) {
                if (req.query.nome !== undefined) {
                    const escolas = await Escola.find({nome: {$regex: match.nome}}).limit(parseInt(req.query.limit)).sort({ dataAdicao: -1 });
                    return res.status(200).send({ escolas });   
                }
                const escolas = await Escola.find(match).limit(parseInt(req.query.limit)).sort({ dataAdicao: -1 });
                return res.status(200).send({ escolas });

            }
            if (req.query.nome !== undefined) {
                console.log(match.nome)
                const escolas = await Escola.find({nome: {$regex: match.nome}}).sort({ dataAdicao: -1 });
                return res.status(200).send({ escolas });

            }
            else {
                const escolas = await Escola.find(match).sort({ dataAdicao: -1 });
                return res.status(200).send({ escolas });

            }

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
    listarPorId: async (req, res) => {
        try {
            const escola = await Escola.findById(req.params.id);

            return res.send({ escola });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar escola" });
        }
    }
}

module.exports = EscolaController;