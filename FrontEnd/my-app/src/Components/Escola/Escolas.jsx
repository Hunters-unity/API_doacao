import React, { Component } from "react";
import '../../css/AppStyle.css';
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";
import CardEscola from "./CardEscola";


class Escolas extends Component {
    constructor() {
        super();
        this.state = {
            listaEscolas: [],
            redirect: false,
            buscaEscola: ""
        }
    }

    async fazerBusca() {
        const url = `http://localhost:3001/escolas/listar/?limit=6&${this.props.location.search.substring(1)}`
        await axios.get(url).then(response => {
            if (response.data.escolas !== undefined) {
                var listaTemp = [];
                response.data.escolas.map(element => {
                    listaTemp.push(element._id)
                })
                this.setState({ listaEscolas: listaTemp })
                console.log(this.state.listaEscolas)
            }
        })
    }
    async componentDidMount() {
        this.fazerBusca();
    }

    render() {

        return (
            <div >
                <div className='botao busca escola'>
                    <form class="form-inline my-2 my-lg-0"
                        onSubmit={async event => {
                            event.preventDefault();
                            await this.props.history.push({
                                pathname: '/escolas',
                                search: `?nome=${this.state.buscaEscola}`
                            })
                            this.fazerBusca()
                        }}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar Escolas" aria-label="Search" onChange={event => this.setState({ buscaEscola: event.target.value })} />
                        <button class="btn botao-pesquisa my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>
                </div>
                <div className="container escolas">
                    {this.state.listaEscolas.map(element =>
                        <div className="container escolas individual">
                            <CardEscola _id={element} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Escolas;