import React, { Component } from "react";
import "./Style.css";
import axios from 'axios'
import { Container } from "reactstrap";
import avatar from './avatar-crianca.png'

class CardAluno extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <div className="card mb-7">
                    <div className="row">
                        <div className="col">
                            <img src={avatar} alt="ilustração - avatar aluno" className="col-img" />
                        </div>
                        <div className="col">
                            <div className="card-body text-center">
                                <h5 className="card-title" id="nome-responsável">Sônia Souza</h5>
                                <p className="card-text" id="nome-escola">Escola Estadual Djalma</p>
                                <p className="card-text">Escolaridade do Aluno: 9<sup>o</sup> ano</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <form>
                                <fieldset className="materiais-doados">
                                    <legend className="">Lista de Materiais</legend>
                                    <p><label><input type="checkbox" />Mochila</label></p>
                                    <p><label><input type="checkbox" />Estojo</label></p>
                                    <p><label><input type="checkbox" />Caderno</label></p>
                                    <p><label><input type="checkbox" />Canetas</label></p>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col">
                            <a className="botao-doacao"><button className="btn btn-warning">Doar Agora</button></a>
                        </div>

                    </div>
                </div>

            </Container>
        )
    }
}

export default CardAluno;