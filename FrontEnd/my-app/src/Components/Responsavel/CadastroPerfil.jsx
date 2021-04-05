import React from 'react'
import '../../css/AppStyle.css';
import axios from 'axios'
import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

class FormCadastro extends Component {
    constructor() {
        super();
        this.state = {
            nome_responsavel: "",
            email: "",
            senha: "",
            redirect: false
        }
    }


    render() {
        if (this.state.redirect) {
            return (<Redirect to="/home" />)
        }
        return (
            <div className="corpo">

                <div className="container">
                    <h2 className="titulo-4">Informações de Acesso</h2>
                    <form onSubmit={(event) => {
                        console.log(this.state)
                        axios.post('http://localhost:3001/perfil/cadastrar', this.state);
                        event.preventDefault()
                        this.setState({ redirect: true })
                    }}>
                        <fieldset className="informacoes-responsavel">
                            <div className="form-row">
                                <label htmlFor="responsavel-aluno"><strong>Nome do responsável</strong></label>
                                <input className="form-control" type="text" name="responsavel-aluno" id="responsavel-aluno" autoFocus value={this.state.nome_responsavel} required onChange={async (evento) => await this.setState({ nome_responsavel: evento.target.value })} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email"><strong>E-mail:</strong></label>
                                <input className="form-control" type="email" id="email" onChange={async (evento) => await this.setState({ email: evento.target.value })} required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="senha"><b>Senha:</b></label>
                                <input className="form-control" type="password" id="senha" onChange={async (evento) => await this.setState({ senha: evento.target.value })} required="" />
                            </div>

                        </fieldset>
                        <button className="botao botao-enviar btn mt-4" type="submit">Cadastrar</button>
                    </form>
            </div>

            </div >
        )

    }
}
export default FormCadastro;