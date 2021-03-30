import React, {Component} from "react";
import "./Style.css";
import CartaoAluno from "./Aluno";
import Item from "./ListaItens";
import LocalEntrega from "./LocalDeEntrega";
import Detalhes from "./DetalhesDoacao";


class PaginaDoacao extends Component{
    render(){
        return(
            <div>
                <div className="moldura">
                    <header>
                        <h1>Faça sua Doação!</h1>
                    </header>
                    
                    <CartaoAluno/>
                    <h4 className="subtitulo-formulario">Lista de Materiais</h4>

                    <form className="formulario-doacao">
                        <div>
                            <Item/>
                        </div>
                        <h4 className="subtitulo-formulario">Ponto de Entrega</h4>
                        <div>
                            <LocalEntrega/>
                        </div>
                        <h4 className="subtitulo-formulario">Detalhes da Doação</h4>
                        <div>
                            <Detalhes/>
                        </div>
                        <button class="botao btn btn-primary " type="submit" onsubmit="">
                            Confirmar Doação
                        </button>

                    </form>
                </div>
                
            </div>
        )
    }

}

export default PaginaDoacao;