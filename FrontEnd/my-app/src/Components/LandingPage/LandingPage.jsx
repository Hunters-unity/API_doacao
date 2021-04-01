import React from 'react'
import "./Style.css"
import axios from 'axios'
import { Component } from 'react'
import imagemEscola from './corredor-escola.jpg'
import avatar28 from './avatar/Avatar-26.png'
import avatar26 from './avatar/Avatar-28.png'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>

                    <nav className="navbar navbar-expand-sm">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="1">Inicio<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="1">Listas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="1">Escolas</a>
                                </li>
                            </ul>
                            <div className="">
                                <a className=" nav-item btn btn-outline-warning">Cadastrar</a>
                                <a className="nav-item btn btn-light">Login</a>
                            </div>

                        </div>
                    </nav>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </button>
                    </form>
                </header >
                <main>
                    <div className="container mt-5">
                        <p className="titulo-homepage">Listas Recentes</p>
                        <p>Confira as listas de material recém adicionados</p>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-sm-2">
                                    <img src={avatar26} alt="ilustração - avatar aluno" className="avatar-aluno" />
                                </div>
                                <div className="col-sm-4">
                                    <div className="card-body text-center">
                                        <h5 className="card-title" id="nome-responsável">Sônia Souza</h5>
                                        <p className="card-text" id="nome-escola">Escola Estadual Djalma</p>
                                        <p className="card-text">Escolaridade do Aluno: 9<sup>o</sup> ano</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <form>
                                        <fieldset className="materiais-doados">
                                            <legend className="">Lista de Materiais</legend>
                                            <p><label><input type="checkbox" />Mochila</label></p>
                                            <p><label><input type="checkbox" />Estojo</label></p>
                                            <p><label><input type="checkbox" />Caderno</label></p>
                                            <p><label><input type="checkbox" />Canetas</label></p>
                                        </fieldset>
                                    </form>
                                </div>
                                <div className="col-sm-2">
                                    <a href="doar"><button className="btn btn-warning">Doar Agora</button></a>
                                </div>

                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-sm-2">
                                    <img src={avatar28} alt="ilustração - avatar aluno" className="avatar-aluno" />
                                </div>
                                <div className="col-sm-4">
                                    <div className="card-body text-center">
                                        <h5 className="card-title" id="nome-responsável">Sônia Souza</h5>
                                        <p className="card-text" id="nome-escola">Escola Estadual Djalma</p>
                                        <p className="card-text">Escolaridade do Aluno: 9<sup>o</sup> ano</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <form>
                                        <fieldset className="materiais-doados">
                                            <legend className="">Lista de Materiais</legend>
                                            <p><label><input type="checkbox" />Mochila</label></p>
                                            <p><label><input type="checkbox" />Estojo</label></p>
                                            <p><label><input type="checkbox" />Caderno</label></p>
                                            <p><label><input type="checkbox" />Canetas</label></p>
                                        </fieldset>
                                    </form>
                                </div>
                                <div className="col-sm-2">
                                    <a href="doar"><button className="btn btn-warning">Doar Agora</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
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
                                        <a href="1" className="btn btn-warning">Ver Perfil</a>
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
                                        <a href="1" className="btn btn-warning">Ver Perfil</a>
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
                                        <a href="1" className="btn btn-warning">Ver Perfil</a>
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