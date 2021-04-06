import React, { Component } from "react";
import '../../css/AppStyle.css';
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";
import CardAluno from "./CardAluno";


class Alunos extends Component {
    constructor() {
        super();
        this.state = {
            listaAlunos: [],
            redirect: false,
        }
    }


    async componentDidMount() {

        const url = `http://localhost:3001/aluno/listar/${this.props.location.search}`
        await axios.get(url).then(response => {
            if (response.data.alunos !== undefined) {
                var listaTemp = [];
                response.data.alunos.map(element => {
                    listaTemp.push(element._id)
                })
                this.setState({ listaAlunos: listaTemp })
            }
        })
    }


    render() {

        return (
            <div >
                <div className="container alunos">
                    {this.state.listaAlunos.map(element =>
                        <div className="container alunos individual">
                            <CardAluno _id={element} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Alunos;