import React, {Component} from 'react';
import '../../css/AppStyle.css';
import axios from 'axios';
import Erro404 from '../Imagens/erro404.png';

class PaginaErro extends Component { 
    render() {
        return (
            <div>
                <img src={Erro404} className="imagem-erro"/>
            </div>
        )
    }
}

export default PaginaErro;