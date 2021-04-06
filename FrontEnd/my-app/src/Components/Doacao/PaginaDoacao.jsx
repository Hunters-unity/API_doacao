import React, { Component } from "react";
import '../../css/AppStyle.css';
import avatar from "../Imagens/avatar/Avatar-9.png";


class PaginaDoacao extends Component {
    constructor() {
        super();
        this.state = {
            nomeEscola: "Escola Estadual Plínio Barreto",
            nomeAluno: "Maria",
            anoAluno: "9",
            ensino: "fundamental",
            enderecoEscola: "patati Patatá",
            listaMateriais: { id: ["sasga1a61gs", "s116agagha256", "asg5a1sg61262", "asghao21651261g6s"], nome: ["Lápis", "Borracha", "Caderno", "Mochila"] },
            listaDoados: { id: [], nome: [] }
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
            listaDoados: { nome: listaTemp, id: listaId }
        })
    }

    render() {
        return (
            <div className="corpo">
                <div className="card-cadastro-aluno">
                    <h3 className="titulo-3 text-center">Faça sua Doação!</h3>
                    <img src={avatar} class="imagem-cadastro-aluno" alt="Avatar de rosto de Criança" />
                   
                    
                </div>
                <div className="container">
                    <h3 className="titulo-3 text-center">Lista de Materiais</h3>
                </div>

                <form className="formulario-doacao">
                    <div className="container-lista">
                        <ul className="lista-itens">
                            <li>
                                <h5 className="titulo-5 titulo-form mt-0">Material Doado</h5>
                            </li>
                            {this.state.listaMateriais.nome.map((categoria, index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <label htmlFor="check" id="item-a-doar">{categoria}</label>
                                            <input className="checkbox-lista" type="checkbox" id="check-doacao" name={categoria} onChange={this.handlerAddItem.bind(this)} />
                                        </div>
                                    </li>
                                )
                            })}</ul>
                    </div>
                    <h4 className="titulo-4 mt-5">Ponto de Entrega</h4>
                    <hr />
                    <div>
                        <p className="titulo-pequeno" id="nome-escola">{this.state.nomeEscola}</p>
                        <p>{this.state.enderecoEscola}</p>
                    </div>
                    <h4 className="subtitulo-formulario">Detalhes da Doação</h4>
                    <hr />
                    <div>
                        <label for="nome-doador">Nome do Doador</label>
                        <input className="form-control" type="text" placeholder="Digite seu nome" name="nome-doador" id="nome-doador" />
                        <div className="container-lista mt-5">
                            <h5 className="titulo-5 titulo-form mt-0">Itens a serem doados</h5>
                            <ul>
                                {this.state.listaDoados.nome.map((categoria, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{categoria}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <input className="checkbox-lista" type="checkbox" id="doacao-anonima" />
                        <label className="mb-4" htmlFor="doacao-anonima">Doação anônima</label>
                    </div>
                    <button className="botao btn botao-enviar " type="submit" >
                        Confirmar Doação
                        </button>

                </form>


            </div>
        )
    }

}

export default PaginaDoacao;