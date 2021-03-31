const Aluno = require('../Models/Aluno')

const AlunoController = {
    cadastrar: (req, res) => {
        try{
            if(req.body !== undefined){
                const {nome, ano_letivo, escola, estado, data} = req.body;

                Escola.create({nome, ano_letivo, escola, estado, data})
                    .then( escola => {
                       return res.status(201).send({escola})
                    })
                    .catch( error => {
                        return res.status(400).send({erro: error.message})
                    })
            }else{
                return res.status(400).send({erro: "Erro ao cadastrar escola" });
            }
        }catch(error){
            return res.status(400).send({erro: error.message });
        }
    },

    buscar: (req, res)  => {

    },

    atualizar: (req, res) =>  {

    },

    excluir: (req, res) => {

    }


}

module.exports = AlunoController;