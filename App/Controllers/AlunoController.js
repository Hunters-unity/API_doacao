const Aluno = require('../Models/Aluno')

const AlunoController = {
    cadastrar: async (req, res) => {
        try {
            const { nome, ano_letivo, escola, estado, data, responsavel } = req.body;
            if (nome !== undefined, escola !== undefined && responsavel !== undefined) {

                await Aluno.create({ nome, ano_letivo, escola, estado, data, responsavel })
                    .then(aluno => {
                        return res.status(201).send({ aluno })
                    })
                    .catch(error => {
                        return res.status(400).send({ erro: error.message })
                    })
            } else {
                return res.status(400).send({ erro: "Erro ao cadastrar aluno" });
            }
        } catch (error) {
            return res.status(400).send({ erro: error.message });
        }
    },
    listar: async (req, res) => {
        try {
            const alunos = await Aluno.find().limit(5);


            return res.status(200).send({ alunos });

        } catch (error) {

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