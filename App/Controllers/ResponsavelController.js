const Responsavel = require('../Models/Responsavel')

const ResponsavelController = {
    cadastrar: async (req, res) => {
        try {
            const {nome, cpf, email, telefone, alunos, data, perfil} = req.body
            if(nome !== undefined && cpf !== undefined  && perfil !== undefined ){

                const responsavel = await Responsavel.create({nome, cpf, email, telefone, alunos, data, perfil});

                return res.status(201).send({responsavel});
            }else{
                return res.status(400).send({erro: "Requisição mal feita"});
            }
            
        } catch (error) {
            return res.status(400).send({erro: error.message});
        }

    },

    //Buscar Responsável apartir do id do seu respectivo Perfil
    buscar: async (req, res) => {
        try {
            
            const responsavel = await Responsavel.findOne({perfil: req.params.idPerfil});
            
            if(responsavel !== null){
                return res.status(200).send({responsavel})
            }else{
                return res.status(400).send({erro: 'Perfil sem responsável correspondente'})
            }
        } catch (error) {
            return res.status(400).send({erro: error.message})
        }
    }


}

module.exports = ResponsavelController;