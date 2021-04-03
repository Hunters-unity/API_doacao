import React, { Component } from "react";
import "./Style.css";
import axios from 'axios'
import avatar from './avatar-crianca.png'

class CardAluno extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container card">
                <div className="row">
                    <div className="col">
                        <img src={avatar} alt="ilustração - avatar aluno" className="col img" />
                    </div>
                    <div className="col titulo">
                        <h5 className="card-title cartaoaluno" id="responsável">Responsável:</h5>
                        <p className="card-text" id="nome-responsável">Sônia Souza</p>
                        <h5 className="card-title cartaoaluno" id="escola">Escola:</h5>
                        <p className="card-text" id="nome-escola">Escola Estadual Djalma</p>

                    </div>
                    <div className="col md cartaoaluno">
                        <form>
                            <fieldset className="materiais-doados">
                                <legend className="card-title cartaoaluno">Lista de Materiais</legend>
                                <ul>
                                    <li><input type="checkbox" id="Caneta" className="checkitem"/><label htmlFor="Caneta"> Caneta</label></li>
                                    <li><input type="checkbox" id="Estojo" className="checkitem"/><label htmlFor="Estojo"> Estojo</label></li>
                                    <li><input type="checkbox" id="Caderno" className="checkitem"/><label htmlFor="Caderno"> Caderno</label></li>
                                    <li><input type="checkbox" id="Mochila" className="checkitem"/><label htmlFor="Mochila"> Mochila</label></li>
                                </ul>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col botao">
                        <a className="botao-doacao"><button className="btn btn-warning">Doar Agora</button></a>
                    </div>

                </div>
            </div>
        )
    }
}

export default CardAluno;