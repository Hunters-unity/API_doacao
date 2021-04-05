import React from 'react'
import '../../css/AppStyle.css'
import axios from 'axios'
import { Component } from 'react'
import imagemEscola from '../Imagens/corredor-escola.jpg'
import { Link } from 'react-router-dom'
import CardAluno from '../Aluno/CardAluno'

class Home extends Component { 
    render() {
        return (
            <div className="corpo">
                <main>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn botao-login my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <section className="secao-home">
                        <div className="container mt-5">
                            <h2 className="titulo-2">Listas Recentes</h2>
                            <h4 className="titulo-4">Confira as listas de material recém adicionados</h4>
                        </div>
                        <div className="meu-container-cards">
                            <CardAluno />
                            <CardAluno />
                        </div>
                    </section>
                    <section className="secao-home">
                    <div className="container">
                        <h2 className="titulo-2">Escolas Recentes</h2>
                        <h4 className="titulo-4">Confira algumas escolas recém adicionadas</h4>
                        <div className="row">
                            <div className="col-md">
                                <div className="card">
                                    <img src={imagemEscola} className="card-img-top" alt="Imagem da Escola" />
                                    <div className="card-body">
                                        <h5 className="card-title">Escola Djalma</h5>
                                        <p className="card-text" id="quantidade-alunos-escola">40 Alunos Cadastrados</p>
                                        <p>Progresso da Doação</p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                        <a className="btn btn-warning">Ver Perfil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card">
                                    <img src={imagemEscola} className="card-img-top" alt="Imagem da Escola" />
                                    <div className="card-body">
                                        <h5 className="card-title">Escola Djalma</h5>
                                        <p className="card-text" id="quantidade-alunos-escola">40 Alunos Cadastrados</p>
                                        <p>Progresso da Doação</p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                        <a className="btn btn-warning">Ver Perfil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card" >
                                    <img src={imagemEscola} className="card-img-top" alt="Imagem da Escola" />
                                    <div className="card-body">
                                        <h5 className="card-title">Escola Djalma</h5>
                                        <p className="card-text" id="quantidade-alunos-escola">40 Alunos Cadastrados</p>
                                        <p>Progresso da Doação</p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                        <a className="btn btn-warning">Ver Perfil</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </section>
                    



                </main>
            </div>
        )
    }
}

export default Home;