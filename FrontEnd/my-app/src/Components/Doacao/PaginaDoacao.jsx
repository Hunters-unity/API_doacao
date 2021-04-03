import React, { Component } from "react";
import "./Style.css";
import avatar from "./avatar-crianca.png";


class PaginaDoacao extends Component {
    constructor() {
        super();
        this.state ={
            nomeEscola: "Escola Estadual Plínio Barreto",
            nomeAluno: "Maria",
            anoAluno: "9",
            ensino: "fundamental",
            enderecoEscola: "patati Patatá",
            listaMateriais: {id:["sasga1a61gs","s116agagha256","asg5a1sg61262","asghao21651261g6s"],nome:["Lápis", "Borracha", "Caderno", "Mochila"]},
            listaDoados: {id:[],nome:[]}
        }
    }
    removeItemOnce(arr, value) {
        var listaTemp = arr;
        var indice = arr.indexOf(value);
        if (indice > -1) {
            listaTemp.splice(indice, 1);
            this.setState({arr: listaTemp})
        }
        return arr;
    }

    handlerAddItem(evento) {
        var doar = evento.target.checked;
        var listaTemp = this.state.listaDoados.nome
        var listaId = this.state.listaDoados.id
        var index = this.state.listaMateriais.nome.indexOf(evento.target.name)
        var id = this.state.listaMateriais.id[index]
        if (doar) {
            listaTemp.push(evento.target.name)
            listaId.push(id)

        } else {
            this.removeItemOnce(this.state.listaDoados.nome, evento.target.name)
            this.removeItemOnce(this.state.listaDoados.id, id)
        }
        this.setState({
            listaDoados: {nome: listaTemp,id:listaId}
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                
                    <header>
                        <h1>Faça sua Doação!</h1>
                    </header>

                    <div className="container">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-sm-5">
                                    <img src={avatar} alt="ilustração de menina" />
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-body text-center">
                                        <h5 className="card-title" id="nome-crianca">{this.state.nomeAluno}</h5>
                                        <p className="card-text" id="nome-escola">{this.state.nomeEscola}</p>
                                        <p className="card-text">{this.state.anoAluno}<sup>o</sup> ano  {this.state.ensino}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="subtitulo-formulario">Lista de Materiais</h4>

                    <form className="formulario-doacao">
                        <div>
                            <ul className="lista-itens">
                                <li>
                                    <p>Material     Doado</p>
                                </li>
                                {this.state.listaMateriais.nome.map((categoria, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <label htmlFor="check" id="item-a-doar">{categoria}</label>
                                                <input type="checkbox" id="check-doacao" name={categoria} onChange={this.handlerAddItem.bind(this)} />
                                            </div>
                                        </li>
                                    )
                                })}</ul>
                        </div>
                        <h4 className="subtitulo-formulario">Ponto de Entrega</h4>
                        <hr />
                        <div>
                            <p className="titulo-pequeno" id="nome-escola">{this.state.nomeEscola}</p>
                            <p>{this.state.enderecoEscola}</p>
                        </div>
                        <h4 className="subtitulo-formulario">Detalhes da Doação</h4>
                        <hr />
                        <div>
                            <label for="nome-doador" className="titulo-pequeno">Nome do Doador</label>
                            <input className="form-control" type="text" placeholder="Digite seu nome" name="nome-doador" id="nome-doador" />

                            <p className="titulo-pequeno">Itens a serem doados</p>
                            <ul>
                                {this.state.listaDoados.nome.map((categoria, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{categoria}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <input type="checkbox" id="doacao-anonima" />
                            <label htmlFor="doacao-anonima">Doação anônima</label>
                        </div>
                        <button className="botao btn btn-primary " type="submit" >
                            Confirmar Doação
                        </button>

                    </form>
                

            </div>
        )
    }

}

export default PaginaDoacao;