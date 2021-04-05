import React, {Component} from 'react';
import '../../css/AppStyle.css';
import axios from 'axios';
import ImagemSucessoDoacao from '../Imagens/ilustracao-6.png';

class SucessoDoacao extends Component { 
    render() {
        return (
            <div>
                <p className="texto-sucesso">Doação concluída com sucesso!</p>
                <img src={ImagemSucessoDoacao} className="imagem-sucesso"/>
            </div>
        )
    }
}

export default SucessoDoacao;