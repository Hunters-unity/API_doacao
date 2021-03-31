import React, {Component} from "react";
import "./Style.css";
import avatar from "./avatar-crianca.png";


class PaginaDoacao extends Component{
    constructor(){
        super();
        this.nomeEscola = "Escola Estadual Plínio Barreto";
        this.nomeAluno = "Maria"
        this.anoAluno = "9"
        this.enderecoEscola = "Patati patatá";
        this.listaMateriais = ["Lápis","Borracha","Caderno","Mochila"];
        this.listaValor = ["1","2","10","20"]
        this.listaDoados = [""];
        this.anonimo = false;
        this.state = {};
    }
    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
    }

    handlerAddItem(evento){
        var doar = evento.target.checked;
        if (doar){
            this.listaDoados.push("item")
        }else{
            this.removeItemOnce(this.listaDoados, "item")
        }
        this.setState({
            doados: this.listaDoados
        })
    }
    handlerAnonimo(){
        this.anonimo = !this.anonimo
    }
    
    render(){
        return(
            <div>
                <div className="moldura">
                    <header>
                        <h1>Faça sua Doação!</h1>
                    </header>
                    
                    <div className="container">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-sm-5">
                                    <img src={avatar} alt="ilustração de menina ruiva"/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-body text-center">
                                    <h5 className="card-title" id="nome-crianca">{this.nomeAluno}</h5>
                                    <p className="card-text" id="nome-escola">{this.nomeEscola}</p>
                                    <p className="card-text">{this.anoAluno}<sup>o</sup> ano</p>
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
                                    {this.listaMateriais.map((categoria,index) => {
                                        return (
                                        <li key={index}>
                                            <div>
                                                <label htmlFor="check" id="item-a-doar">{categoria}</label>
                                                <input type="checkbox" id="check-doacao" onChange={this.handlerAddItem.bind(this)}/>
                                            </div>
                                        </li>
                                    )
                            })}</ul>
                        </div>
                        <h4 className="subtitulo-formulario">Ponto de Entrega</h4>
                        <hr/>
                        <div>
                            <p className="titulo-pequeno" id="nome-escola">{this.nomeEscola}</p>
                            <p>{this.enderecoEscola}</p>
                        </div>  
                        <h4 className="subtitulo-formulario">Detalhes da Doação</h4>
                        <hr/>
                        <div>
                            <label for="nome-doador" className="titulo-pequeno">Nome do Doador</label>
                            <input className="form-control" type="text" placeholder="Digite seu nome" name="nome-doador" id="nome-doador"/>
                            
                            <p className="titulo-pequeno">Itens a serem doados</p>
                            <ul>
                                {this.listaDoados.map((categoria,index) => {
                                return (
                                <li key={index}>
                                    <p>{categoria}</p>
                                </li>
                                )})}
                            </ul>
                            <input type="checkbox" id="doacao-anonima" onChange={this.handlerAnonimo.bind(this)}/>
                            <label htmlFor="doacao-anonima">Doação anônima</label>
                        </div>
                        <button className="botao btn btn-primary " type="submit" onSubmit="">
                            Confirmar Doação
                        </button>

                    </form>
                </div>
                
            </div>
        )
    }

}

export default PaginaDoacao;