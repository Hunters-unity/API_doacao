import React, { Component } from "react";
import '../../css/AppStyle.css';
import axios from 'axios'
import { Redirect } from "react-router";


class LoginResponsavel extends Component {
    constructor() {
        super();
        this.state = { email: "", senha: "", perfil:"", redirect: false }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/cadastroaluno/",
                search: this.state.perfil}}/>
        }
        return (
            <div className='corpo'>
                <div className='container'>
                    <form className='form-login' onSubmit={
                        event => {
                            axios.post('http://localhost:3001/perfil/logar', { email: this.state.email, senha: this.state.senha }).then(res => {
                                if (res.data.existe === false) {
                                    alert("email ou senha inválidos")
                                }
                                else {
                                    this.setState({ redirect: true, perfil: res.data.id })
                                }
                            }).catch(err => console.log(err));
                            event.preventDefault()
                        }}>
                        <div className="form-row">
                            <label htmlFor="email"><strong>E-mail:</strong></label>
                            <input className="form-control" type="email" id="email" onChange={async (evento) => await this.setState({ email: evento.target.value })} required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="senha"><b>Senha:</b></label>
                            <input className="form-control" type="password" id="senha" onChange={async (evento) => await this.setState({ senha: evento.target.value })} required="" />
                        </div>
                       
                        <button className="btn botao botao-enviar mt-4 w-25" type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginResponsavel;