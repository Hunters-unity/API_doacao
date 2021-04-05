import React from 'react';
import '../../css/AppStyle.css';
import axios from 'axios';
import { Component } from 'react';
import CardAluno from '../Aluno/CardAluno';

class MateriaisDoados extends Component {
    render() {
        return (
            <div>
                <div className="container">
                     <h3 className="titulo-3">Confirme sua doação:</h3>
                <div className="container-lista mt-5">
                   <h5 className="titulo-5 titulo-form mt-0">Itens a serem doados</h5>
                </div>
                <button className="botao btn botao-enviar mt-4 " type="submit">Confirmar Doação</button>
                </div>               
            </div>
        )
    }
}

export default MateriaisDoados;