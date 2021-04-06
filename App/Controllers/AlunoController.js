const Aluno = require('../Models/Aluno')
const Lista = require('../Models/ListaDoacao')
const ItemDoacao = require('../Models/ItemDoacao')


const AlunoController = {
    cadastrar: async (req, res) => {
        try {
            const { escola, nome, ano_letivo, listaDoacao, responsavel } = req.body
            const itens = []


            await Promise.all(listaDoacao.map(async item => {
                const novoItem = await ItemDoacao.create({ item })
                itens.push(novoItem._id)
            }))
            const novaLista = await Lista.create({ itens })
            const lista = novaLista._id
            try {
                const aluno = await Aluno.create({ escola, nome, ano_letivo, lista, responsavel })
                return res.status(201).send(aluno)
            } catch (error) {
                return res.status(400).send({ erro: error.message })

            }
        } catch (error) {
            return res.status(400).send({ erro: error.message })

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
                if (req.query.escola !== undefined) {
                    const alunos = await Aluno.find({ nome: { $regex: match.escola } }).limit(parseInt(req.query.limit)).sort({ dataAdicao: -1 });
                    return res.status(200).send({ alunos });
                }
                const alunos = await Aluno.find(match).limit(parseInt(req.query.limit)).sort({ dataAdicao: -1 });
                return res.status(200).send({ alunos });

            }
            if (req.query.escola !== undefined) {
                console.log(match.escola)
                const alunos = await Aluno.find(req.query).sort({ dataAdicao: -1 });
                return res.status(200).send({ alunos });

            }
            else {
                const alunos = await Aluno.find().sort({ dataAdicao: -1 });
                return res.status(200).send({ alunos });

            }
        } catch (error) {
            return res.status(400).send({ erro: error })

        }
    },
    buscar: async (req, res) => {
        try {
            const aluno = await Aluno.findById(req.params.id);

            return res.send({ aluno });
        } catch {
            return res.status(400).send({ erro: "erro ao procurar escola" });
        }
    }

}

module.exports = AlunoController;