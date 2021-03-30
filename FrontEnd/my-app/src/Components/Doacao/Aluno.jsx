import React, {Component} from "react";
import "./Style.css";
import avatar from "./avatar-crianca.png";

class CartaoAluno extends Component{
    render(){
        return(
            <div className="container">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-sm-5">
                            <img src={avatar} alt="ilustração de menina ruiva"/>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body text-center">
                            <h5 className="card-title" id="nome-crianca">Maria</h5>
                            <p className="card-text" id="nome-escola">Escola Estadual Plínio Barreto</p>
                            <p className="card-text">9<sup>o</sup> ano</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}    

export default CartaoAluno;