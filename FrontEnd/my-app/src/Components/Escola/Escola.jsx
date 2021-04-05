
import React from 'react'
import '../../css/AppStyle.css'
import axios from 'axios'
import { Component } from 'react'
import imagemEscola from '../Imagens/corredor-escola.jpg'
import { Link, Redirect } from 'react-router-dom'
import CardAluno from '../Aluno/CardAluno'
import CardEscola from '../Escola/CardEscola'

class aaaaa extends Component {

    constructor() {
        super();
        this.state = {
            listaEscolas: [],
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3001/escolas/listar/').then(response => {
            console.log(this.props)
            if (response.data.escolas !== undefined) {
                var listaTemp = [];
                response.data.escolas.map(element => {
                    listaTemp.push(element._id)
                })
                this.setState({ listaEscolas: listaTemp })
            }
        }
        )
    }
    render() {
        return (
            <div className="container escolas">
                {this.state.listaEscolas.map(element =>
                    <div className="container escolas individual">
                        <CardEscola _id={element} />
                    </div>
                )}
            </div>
        )
    }
}

export default aaaaa ;