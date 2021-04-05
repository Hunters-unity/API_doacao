import React, { Component } from "react";
import "../../css/AppStyle.css";
import axios from 'axios'
import avatar from '../Imagens/avatar/Avatar-24.png'
import userIcon from '../Imagens/userIcon.png'
import schoolIcon from '../Imagens/schoolIcon.png'

class CardAluno extends Component {
    constructor() {
        super();
        this.state = {
            lista: "",
            avatar: "",
            responsavel: "",
            ano: "",
            ensino: "",
            escola: "",
            listaMateriais: { id: [], nome: [""] },
        }
        this.listaDoados = { id: [], nome: [] }

    }
    //adiciona item na lista a ser doada
    handlerAddItem(evento) {
        var doar = evento.target.checked;
        var index = this.state.listaMateriais.nome.indexOf(evento.target.name)
        var id = this.state.listaMateriais.id[index]
        if (doar) {
            this.listaDoados.nome.push(evento.target.name)
            this.listaDoados.id.push(id)

        } else {
            this.removeItemOnce(this.listaDoados.nome, evento.target.name)
            this.removeItemOnce(this.listaDoados.id, id)
        }
        console.log(this.state)
        console.log("\n ")
        console.log(this.listaDoados)
    }
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
    async componentDidMount() {
        await axios.get('http://localhost:3001/aluno/buscar/' + this.props._id).then(async response => {
            await axios.get('http://localhost:3001/escolas/buscar/' + response.data.aluno.escola).then(async response => await this.setState({escola: response.data.escola.nome}))
            this.setState({ lista: response.data.aluno.lista[0], responsavel: response.data.aluno.nome});

        }).catch( err => console.log(err))
        if (this.listaDoados.id[0] === undefined) {
            axios.get('http://localhost:3001/lista/material/' + this.state.lista).then(response => { //falta rota de busca de dado do aluno
                response.data.lista.itens.map(element => {
                    axios.get('http://localhost:3001/lista/item/' + element).then(response => {
                        if (response.data.item.doado === false) {
                            this.handlerCriaLista(response.data.item)
                        }
                    }
                    )
                })
            }).catch( err => console.log(err))
        }
    }

    removeItemOnce(arr, value) {
        var listaTemp = arr;
        var indice = arr.indexOf(value);
        if (indice > -1) {
            listaTemp.splice(indice, 1);
            this.setState({ arr: listaTemp })
        }
        return arr;
    }
    render() {
        return (
            <div className="container cartaoaluno">
                <div className="row cartaoaluno">
                    <div className="col cartaoaluno">
                        <img src={avatar} alt="ilustração - avatar aluno" className="col img cartaoaluno" />
                    </div>
                    <div className="col cartaoaluno titulo">
                        <div className="text-icon">
                            <img src={userIcon} className="text-icon icon" />
                            <h5 className="card-title cartaoaluno" id="responsável">Responsável:</h5>
                        </div>
                        <p className="card-text cartaoaluno" id="nome-responsável">{this.state.responsavel}</p>
                        <div className="text-icon">
                            <img src={schoolIcon} className="text-icon icon" />
                            <h5 className="card-title cartaoaluno" id="escola">Escola:</h5>
                        </div>
                        <p className="card-text cartaoaluno" id="nome-escola">{this.state.escola}</p>

                    </div>
                    <div className="col cartaoaluno md">
                        <form>
                            <fieldset className="materiais-doados">
                                <legend className="card-title cartaoaluno">Lista de Materiais</legend>
                                <ul className="lista-material-aluno">
                                    {this.state.listaMateriais.nome.map((categoria, index) => {
                                        return (
                                            <li key={index}>
                                                <div>
                                                    <input type="checkbox" className="checkitem" id={categoria} name={categoria} onChange={this.handlerAddItem.bind(this)} />
                                                    <label htmlFor="check" className="card-text cartaoaluno" >{categoria}</label>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col cartaoaluno botao">
                        <button className="btn botao botao-enviar">Doar Agora</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CardAluno;