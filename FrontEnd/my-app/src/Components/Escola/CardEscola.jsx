import React, { Component } from "react";
import '../../css/AppStyle.css';
import axios from 'axios'
import avatar from '../Imagens/escola-1.jpg'
import schoolIcon from '../Imagens/schoolIcon.png'
import { Link } from "react-router-dom";


class CardEscola extends Component {
    constructor() {
        super();
        this.state = {
            avatar: "",
            estado: "",
            cidade: "",
            nome: "",
            quantidadeAlunos: "",
            id: ""
        }

    }
    //mostra dados da escola
    async handlerCriaLista(objeto) {
        await this.removeItemOnce(this.state.listaMateriais.nome, "")
        var nomeTemp = this.state.listaMateriais.nome
        var idTemp = this.state.listaMateriais.id
        nomeTemp.push(objeto.item)
        idTemp.push(objeto._id)
        this.setState({
            listaMateriais: { nome: nomeTemp, id: idTemp }
        })
    }
    //busca escola relativa ao cartão
    async componentDidMount() {
        this.setState({ id: this.props._id })
        await axios.get('http://localhost:3001/escolas/buscar/' + this.props._id).then(async response => {
            var escola = await response.data.escola.nome
            this.setState({ estado: response.data.escola.estado, cidade: response.data.escola.cidade, nome: escola })
        }).catch(err => console.log(err))
    }


    render() {
        return (
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
                        <Link to={{
                            pathname: "/alunos/",
                            search: "?escola=" + this.state.id
                        }}>
                            <button className="btn botao botao-doacao">Ver alunos</button>
                            </Link>
                    </div>
                    </div>
                </div>

        )
    }
}

export default CardEscola;