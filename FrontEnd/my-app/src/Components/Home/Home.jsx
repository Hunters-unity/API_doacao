import React from 'react'
import "./Style.css"
import axios from 'axios'
import { Component } from 'react'
import imagemEscola from './corredor-escola.jpg'
import { Link } from 'react-router-dom'
import CardAluno from '../Aluno/CardAluno'

class LandingPage extends Component {
    render() {
        return (
            <div className='botton-background'>


                <main>
                    <div className="container mt-5">
                        <p className="titulo-homepage">Listas Recentes</p>
                        <p>Confira as listas de material recém adicionados</p>
                    </div>
                    <CardAluno/>
                    <CardAluno/>
                    <div className="container">
                        <p className="titulo-homepage">Escolas Recentes</p>
                        <p>Confira algumas escolas recém adicionadas</p>
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



                </main>
            </div>
        )
    }
}

export default LandingPage;