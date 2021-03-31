import React, { useState } from 'react'
import "./form-style.css"
import axios from 'axios'

function FormCadastro(){
    const [form,setForm] = useState({nome_responsavel:"",email:"",senha:""})


    return(
        <div className="moldura">
		<header >
			<h1>Faça seu cadastro!</h1>
			<p>É simples, rápido e GRÁTIS!</p>
        </header>
            <div className="container">
                <h2 className="titulo-formulario">Informações de Acesso</h2>
                    <form onSubmit={(event) =>{ event.preventDefault();
                        axios.post('http://localhost:3001/perfil/cadastrar', form);
                        console.log(form)}}>
                        <fieldset className="informacoes-responsavel">
                            <div className="form-row">
                                <label htmlFor="responsavel-aluno"><strong>Nome do responsável</strong></label>
                                <input className="form-control" type="text" name="responsavel-aluno" id="responsavel-aluno" autoFocus required value={form.nome_responsavel} onChange={(event)=> {setForm({...form, nome_responsavel: event.target.value})}}/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email"><strong>E-mail:</strong></label>
                                <input className="form-control" type="email" id="email" value={form.email} onChange={(event)=> {
                                    setForm({...form,email: event.target.value})}} required/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="senha"><b>Senha:</b></label>
                                <input className="form-control" type="password" id="senha" value={form.senha} onChange={(event)=> {setForm({...form,senha: event.target.value})}} required=""/>
                            </div>

                        </fieldset>
                        <a href="cadastro-responsavel.html"><button className="botao btn btn-primary" type="submit">Cadastrar</button></a> 
                    </form>
            </div>
	    </div>
    )
}

export default FormCadastro;