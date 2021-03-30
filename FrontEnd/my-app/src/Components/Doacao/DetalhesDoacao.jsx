import React, {Component} from "react";
import "./Style.css";
import Form from 'react-bootstrap/Form';

class Detalhes extends Component{
    render(){
        return (
            <div>
                <p className="titulo-pequeno">Nome do Doador</p>
                <input type="text" placeholder="Digite seu nome" id="nome-doador"/>
                <p className="titulo-pequeno">Itens a serem doados</p>
                <ul>
                    {Array.of("Lápis","Borracha","Caderno").map(categoria => {
                    return (
                    <li>
                        <p>{categoria}</p>
                    </li>
            )
        })}
                </ul>
                <Form.Check type="checkbox" label="Doação anônima"/>
            </div>
        )
    }
}

export default Detalhes;