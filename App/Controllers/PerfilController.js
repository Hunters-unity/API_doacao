const Perfil = require('../Models/Perfil')

const PerfilController = {
    cadastrar: async (req, res) => {
        try {
            const {nome_responsavel, email, senha} = req.body;
            if(email !== undefined && senha !== undefined){
                
                const jaExiste = await Perfil.findOne({email: email});
                if(jaExiste == null){
                    const perfil = await Perfil.create({nome_responsavel, email, senha});

                    return res.status(200).send({perfil})
                }else{
                    return res.status(400).send({erro: `email ${jaExiste.email} já existe`})
                }


            }else{
                return res.status(400).send({
                    erro: "Requisição mal feita"
                })
            }
        } catch (error) {
            return res.status(400).send({"erro": error.message})
        }
    },

    logar: async (req, res)  => {
        try {
            const {email, senha} = req.body;
            if(email !== undefined && senha !== undefined){                

                const perfil = await Perfil.findOne({email: email, senha: senha});

                if(perfil !== null){
                    return res.status(200).send({existe: true})
                }else{
                    return res.status(200).send({existe: false})
                }
            }else{
                return res.status(400).send({
                    erro: "Requisição mal feita"
                })
            }
        } catch (error) {
            return res.status(400).send({"erro": error.message}) 
        }

    }
}

module.exports = PerfilController