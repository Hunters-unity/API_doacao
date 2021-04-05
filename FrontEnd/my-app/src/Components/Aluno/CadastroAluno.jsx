import React, { Component } from "react";
import "./StyleAluno.css";
import '../../css/AppStyle.css'
import avatar from "./avatar-crianca.png";
import axios from 'axios'

class CadastroAluno extends Component {
	constructor() {
		super();
		this.state = { placeholder: [""], aluno: { escola: "", nome: "", ano_letivo: "", lista: [], responsavel: "" } }
		this.cidade = ["Selecione"]
		this.escola = ["Selecione"]
	}
	getCidade(event) {
		var estado = event.target.value;
		var cidades = ["Selecione"];
		axios.get('http://localhost:3001/escolas/listarPorEstado/' + estado).then(response => {
			response.data.map((element) =>
				cidades.push(element)
			)
			this.cidade = cidades;
			this.setState({ placeholder: cidades })
		})
	}
	getEscola(event) {
		var cidade = event.target.value;
		var escolas = ["Selecione"];
		axios.get('http://localhost:3001/escolas/listarPorCidade/' + cidade).then(response => {
			response.data.map((element) =>
				escolas.push(element)
			)
			this.escola = escolas;
			this.setState({ placeholder: escolas })
		})
	}
	handlerAddItem(evento) {
		var receber = evento.target.checked;
		var atualizaLista = this.state.aluno.lista;
		if (receber) {
			atualizaLista.push(evento.target.name)
		} else {
			atualizaLista = this.removeItemOnce(this.state.aluno.lista, evento.target.name)
		}
		this.setState({ aluno: { ...this.state.aluno, lista: atualizaLista } })
	}
	removeItemOnce(arr, value) {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}
	render() {
		return (


			<div className="corpo">
				<header></header>


				<h1>Faça seu cadastro!</h1>
				<p>É simples, rápido e GRÁTIS!</p>

				<div className="container">
					<h2 className="titulo-formulario">Informações do Aluno</h2>
					<div>
						<img src={avatar} alt="avatar do aluno" />
						<p>Selecione o avatar do aluno</p>
					</div>

					<form id="form-info-aluno">
						<fieldset className="informacoes-aluno">
							<div className="form-row">
								<h5><strong>Escola</strong></h5>
								<label htmlFor="escola-estado"><strong>Coloque o estado da sua escola</strong></label>
								<select className="form-control" id="escola-estado" required onChange={this.getCidade.bind(this)}>
									<option selected disabled>Selecione</option>
									<option>AC</option>
									<option>AL</option>
									<option>AP</option>
									<option>AM</option>
									<option>BA</option>
									<option>CE</option>
									<option>DF</option>
									<option>ES</option>
									<option>GO</option>
									<option>MA</option>
									<option>MT</option>
									<option>MS</option>
									<option>MG</option>
									<option>PA</option>
									<option>PB</option>
									<option>PR</option>
									<option>PE</option>
									<option>PI</option>
									<option>RR</option>
									<option>RO</option>
									<option>RJ</option>
									<option>RN</option>
									<option>RS</option>
									<option>SC</option>
									<option>SP</option>
									<option>SE</option>
									<option>TO</option>
								</select>
							</div>
							<div className="form-row">
								<label htmlFor="escola-cidade"><strong>Selecione a cidade</strong></label>
								<select className="form-control" id="escola-cidade" required onChange={this.getEscola.bind(this)}>
									{this.cidade.map((categoria) => {
										return (
											<option>
												{categoria}
											</option>
										)
									})}
								</select>
							</div>
							<div className="form-row">
								<label htmlFor="nome-escola"><strong>Nome da Escola</strong></label>
								<select className="form-control" id="nome-escola" required onChange={event => { this.setState({ aluno: { ...this.state.aluno, escola: event.target.value } }) }}>
									{this.escola.map((categoria) => {
										return (
											<option>
												{categoria}
											</option>
										)
									})}
								</select>
							</div>
							<div className="form-row">
								<label htmlFor="nome-aluno"><b>Nome do Aluno</b></label>
								<input className="form-control" type="text" name="nome-aluno" id="nome-aluno" placeholder="Digite seu nome completo"
									required onChange={async event => await this.setState({ aluno: { ...this.state.aluno, nome: event.target.value } })} />
								<label htmlFor="ano-escolar"><b>Ano escolar</b></label>
								<input className="form-control" type="text" name="ano-escolar" id="ano-escolar" required
									onChange={async event => await this.setState({ aluno: { ...this.state.aluno, ano_letivo: event.target.value } })} />
							</div>
						</fieldset>
					</form>
					<hr />
					<form id="form-inclui-materiais"
						onSubmit={(event) => {
							console.log(this.state)
							//axios.post('http://localhost:3001/aluno/cadastrar', this.state);
							event.preventDefault()
						}}>
						<div className="container">
							<h2 className="titulo-formulario">Lista de Materiais</h2>
							<p className="text-center">Selecione os materiais que gostaria de receber como doação.<br />Lembre-se de solicitar somente o que realmente precisa, para que todos possam receber auxílio!</p>
							<div className="row">
								<div className="col-sm">
									<fieldset className="categorias-materiais" id="materiais-papelaria" onChange={this.handlerAddItem.bind(this)}>
										<legend className="titulo-pequeno">Papelaria</legend>
										<p><label><input type="checkbox" name="Caderno" />Cadernos</label></p>
										<p><label><input type="checkbox" name="Estojo" />Estojo</label></p>
										<p><label><input type="checkbox" name="Lápis" />Lápis</label></p>
										<p><label><input type="checkbox" name="Caneta" />Caneta</label></p>
									</fieldset>
								</div>
								<div className="col-sm">
									<fieldset className="categorias-materiais" id="materiais-eletronicos" onChange={this.handlerAddItem.bind(this)}>
										<legend className="titulo-pequeno">Eletronicos</legend>
										<p><label><input type="checkbox" name="Calculadora" />Calculadora</label></p>
										<p><label><input type="checkbox" name="Celular" />Celular</label></p>
										<p><label><input type="checkbox" name="Tablet" />Tablet</label></p>
									</fieldset>
								</div>
							</div>
						</div>
						<a href="cadastro-responsavel.html"><button className="botao btn btn-secondary" type="button" >Voltar</button></a>
						<button className="botao btn btn-primary" type="submit">Avançar</button>
					</form>
				</div>
			</div>

		)
	}
}

export default CadastroAluno;