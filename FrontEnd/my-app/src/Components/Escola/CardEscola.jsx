import React, { Component } from "react";
import "./Style.css";
import axios from 'axios'
import avatar from '../Imagens/corredor-escola.jpg'
import userIcon from '../Imagens/userIcon.png'
import schoolIcon from '../Imagens/schoolIcon.png'
import { Link } from "react-router-dom";

class CardEscola extends Component {
    constructor() {
        super();
        this.state = {
            avatar: "",
            estado: "",
            cidade: "",
            quantidadeAlunos: "",
            id: ""
        }

    }
    //mostra dados da escola
    async handlerCriaLista(objeto) {
        await this.removeItemOnce(this.state.listaMateriais.nome, "")
        console.log(objeto)
        var nomeTemp = this.state.listaMateriais.nome
        var idTemp = this.state.listaMateriais.id
        nomeTemp.push(objeto.item)
        idTemp.push(objeto._id)
        this.setState({
            listaMateriais: { nome: nomeTemp, id: idTemp }
        })
    }
    /*async componentDidMount() {
        if (this.listaDoados.id[0] === undefined) {
            axios.patch('http://localhost:3001/doacao/60689ddaaa112bc192142b3c').then(response => { //falta rota de busca de dado do aluno
                response.data.doacao.itens.map(element => {
                    axios.put('http://localhost:3001/doacao/' + element).then(response => {
                        if (response.data.doacao.doado === false) {
                            this.handlerCriaLista(response.data.doacao)
                        }
                    }
                    )
                })
            })
        }
    }*/


    render() {
        return (
            <div className="container cartaoescola">
                <div className="row cartaoescola">
                    <div className="col cartaoescola">
                        <img src={avatar} alt="ilustração - avatar escola" className="col img cartaoescola" />
                    </div>
                    <div className="col cartaoescola titulo">
                        <div className="text-icon">
                            <img src={schoolIcon} className="text-icon icon" />
                            <h5 className="card-title cartaoescola" id="responsável">Escola:</h5>
                        </div>
                        <p className="card-text cartaoescola" id="nome-responsável">Escola de Educação Básica e Profissional Dona Sinhá Neves</p>
                        <div className="text-icon">
                            <img src={schoolIcon} className="text-icon icon" />
                            <h5 className="card-title cartaoescola" id="escola">Endereço:</h5>
                        </div>
                        <p className="card-text cartaoescola" id="nome-escola">São João del Rei - MG</p>

                    </div>
                    <div className="col cartaoescola botao">
                        <Link to='/'>
                            <button className="btn btn-warning">Ver alunos</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default CardEscola;