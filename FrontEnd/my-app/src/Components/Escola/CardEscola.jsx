import React, { Component } from "react";
import "./StyleEscola.css";
import axios from 'axios'
import avatar from '../Imagens/corredor-escola.jpg'
import schoolIcon from '../Imagens/schoolIcon.png'
import { Link } from "react-router-dom";

class CardEscola extends Component {
    constructor() {
        super();
        this.state = {
            avatar: "",
            estado: "MG",
            cidade: "São João del Rei",
            nome: "Escola de Educação Básica e Profissional Dona Sinhá Neves",
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
    async componentDidMount() {
        axios.get('http://localhost:3001/escolas/listar/6063f3ba8b88e3d38e1b9b57').then(response => {
            this.setState({ estado: response.data.escola.estado, cidade: response.data.escola.cidade, nome: response.data.escola.nome })
        })
    }


    render() {
        return (
            <div className="corpo">
                <div className="container cartaoescola">
                    <div className="row cartaoescola">
                        <div className="col cartaoescola">
                            <img src={avatar} alt="ilustração - avatar escola" className="col img cartaoescola" />
                        </div>
                        <div className="col cartaoescola titulo">
                            <div className="titulo-corpo cartaoescola">
                                <div className="text-icon">
                                    <img src={schoolIcon} className="text-icon icon" />
                                    <h5 className="card-title cartaoescola">Escola:</h5>
                                </div>
                                <p className="card-text cartaoescola" id="nome-escola">{this.state.nome}</p>
                            </div>
                            <div className="titulo-corpo cartaoescola">
                                <div className="text-icon">
                                    <img src={schoolIcon} className="text-icon icon" />
                                    <h5 className="card-title cartaoescola">Endereço:</h5>
                                </div>
                                <p className="card-text cartaoescola" id="endereco-escola">{this.state.cidade} - {this.state.estado}</p>
                            </div>
                        </div>
                        <div className="col cartaoescola botao">
                            <Link to='/'>
                                <button className="btn btn-warning">Ver alunos</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CardEscola;