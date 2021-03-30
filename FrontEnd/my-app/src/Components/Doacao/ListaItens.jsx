import React, {Component} from "react";
import "./Style.css";

class Item extends Component{
    render(){
        return <ul className="lista-itens">
            <li>
                <p>Material     Doado</p>
            </li>
            {Array.of("Lápis","Borracha","Caderno").map(categoria => {
            return (
                <li>
                    <div>
                        <label for="check">{categoria}</label>
                        <input type="checkbox" id="check"/>
                    </div>
                </li>
            )
        })}</ul>               
    }
}

export default Item;