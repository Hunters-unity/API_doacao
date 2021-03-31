const Aluno = require('../Models/Aluno')

const AlunoController = {
    cadastrar: (req, res) => {
        try{
            const {nome, ano_letivo, escola, estado, data, responsavel} = req.body;
            if(nome !== undefined, escola !== undefined && responsavel !== undefined){                

                Aluno.create({nome, ano_letivo, escola, estado, data, responsavel})
                    .then( aluno => {
                       return res.status(201).send({aluno})
                    })
                    .catch( error => {
                        return res.status(400).send({erro: error.message})
                    })
            }else{
                return res.status(400).send({erro: "Erro ao cadastrar aluno" });
            }
        }catch(error){
            return res.status(400).send({erro: error.message });
        }
    }

}

module.exports = AlunoController;