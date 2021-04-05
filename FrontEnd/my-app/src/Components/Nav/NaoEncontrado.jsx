import React, {Component} from 'react';
import '../../css/AppStyle.css';
import axios from 'axios';
import NaoEncontrado from '../Imagens/NaoEncontrado.png';
import RegistroNaoAchado from '../Imagens/Registros-nao-encontrados.png';

class PaginaNaoEncontrado extends Component { 
    render() {
        return (
            <div>
                <img src={NaoEncontrado} className="imagem-nao-encontrado"/>
                <img src={RegistroNaoAchado} className="imagem-nao-encontrao"/>
            </div>
        )
    }
}

export default PaginaNaoEncontrado;