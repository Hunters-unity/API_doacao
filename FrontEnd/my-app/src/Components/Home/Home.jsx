import React from 'react'
import '../../css/AppStyle.css'
import axios from 'axios'
import { Component } from 'react'
import imagemEscola from '../Imagens/corredor-escola.jpg'
import { Link, Redirect } from 'react-router-dom'
import CardAluno from '../Aluno/CardAluno'
import CardEscola from '../Escola/CardEscola'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            listaEscolas: [],
            listaAlunos: [],
            buscaEscola: "",
            redirect: false
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3001/escolas/listar/?limit=6').then(response => {
            if (response.data.escolas !== undefined) {
                var listaTemp = [];
                response.data.escolas.map(element => {
                    listaTemp.push(element._id)
                })
                this.setState({ listaEscolas: listaTemp })
            }
        }
        )
        await axios.get('http://localhost:3001/aluno/listar/?limit=5').then(response => {
            if (response.data.alunos !== undefined) {
                var listaTemp = [];
                response.data.alunos.map(element => {
                    listaTemp.push(element._id)
                })
                this.setState({ listaAlunos: listaTemp })
            }
        }
        )
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={`/Escolas/?nome=${this.state.buscaEscola}`} />
        }

        return (
            <div className="corpo">
                <main>
                    <form class="form-inline my-2 my-lg-0"
                        onSubmit={event => {
                            event.preventDefault();
                            this.setState({redirect: true})

                        }}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar Escolas" aria-label="Search" onChange={event=> this.setState({buscaEscola: event.target.value}) } />
                        <button class="btn botao-pesquisa my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>
                    <section className="secao-home">
                        <div className="container mt-5">
                            <h2 className="titulo-2">Listas Recentes</h2>
                            <h4 className="titulo-4">Confira as listas de material rec??m adicionados</h4>
                        </div>
                        <div className="meu-container-cards">
                            {this.state.listaAlunos.map(element =>
                                <CardAluno _id={element} />
                            )}
                        </div>
                    </section>
                    <section className="secao-home">

                        <h2 className="titulo-2">Escolas Recentes</h2>
                        <h4 className="titulo-4">Confira algumas escolas rec??m adicionadas</h4>
                        <div className="container escolas">
                            {this.state.listaEscolas.map(element =>
                                <div className="container escolas individual">
                                    <CardEscola _id={element} />
                                </div>
                            )}
                        </div>
                        
                    </section>




                </main>
            </div >
        )
    }
}

export default Home;