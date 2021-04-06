import React, { Component } from "react";
import '../../css/AppStyle.css'
import avatar from "../Imagens/avatar/Avatar-7.png";
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";

class CadastroAluno extends Component {
	constructor() {
		super();
		this.state = {
			cidade: [""],
			escola: { id: [""], nome: [""] },
			aluno: { escola: "", nome: "", ano_letivo: "1o. ano - Fundamental", listaDoacao: [], responsavel: "" },
			redirect: false
		}
	}
	getCidade(event) {
		var estado = event.target.value;
		var cidades = ["Selecione"];
		axios.get('http://localhost:3001/escolas/listar/?estado=' + estado).then(async response => {
			await response.data.escolas.map((element) => {
				if (cidades.indexOf(element.cidade) === -1) {
					cidades.push(element.cidade);
				}
			}
			)
			this.setState({ cidade: cidades })
		}).catch(err => console.log(err))
	}
	getEscola(event) {
		var cidade = event.target.value;
		var escolas = ["Selecione"];
		var ids = [];
		axios.get('http://localhost:3001/escolas/listar/?cidade=' + cidade).then(async response => {
			await response.data.escolas.map((element) => {
				escolas.push(element.nome)
				ids.push(element._id)
			})
			this.setState({ escola: { nome: escolas, id: ids } })
		}).catch(err => console.log(err))
	}
	handlerAddItem(evento) {
		var receber = evento.target.checked;
		var atualizaLista = this.state.aluno.listaDoacao;
		if (receber) {
			atualizaLista.push(evento.target.name)
		} else {
			atualizaLista = this.removeItemOnce(this.state.aluno.listaDoacao, evento.target.name)
		}
		this.setState({ aluno: { ...this.state.aluno, listaDoacao: atualizaLista } })
	}
	removeItemOnce(arr, value) {
		var index = arr.indexOf(value);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}
	async componentDidMount() {
		//pseudo login
		try {
			if (String(this.props.location.search).length > 0) {
				var responsavelID = String(this.props.location.search).substr(1)
				await this.setState({ aluno: { ...this.state.aluno, responsavel: responsavelID } })
			}
			else {
				this.setState({ redirect: true })
			}
		} catch (error) {
			console.log(error)
			this.setState({ redirect: true })
		}
	}

	render() {
		if (this.state.redirect) {
			return (<Redirect to='/home' />)
		}

		return (



			<div className="corpo">
				<div class="card-cadastro-aluno">
					<img src={avatar} class="imagem-cadastro-aluno" alt="Avatar de rosto de Criança" />
					<h5 className="titulo-5 text-center">Selecione o avatar do aluno</h5>
					<h3 className="titulo-3">Cadastre os Alunos</h3>
				</div>

				<div className="container">
					<button className="botao btn botao-adicionar">Adicionar Aluno</button>
					<h5 className="titulo-5 titulo-form">Dados do Aluno</h5>
					<form id="form-info-aluno">
						<fieldset className="informacoes-aluno">
							<div className="form-row">
								<label htmlFor="escola-estado"><strong>Selecione o seu Estado</strong></label>
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
								<label htmlFor="escola-cidade"><strong>Selecione a sua Cidade</strong></label>
								<select className="form-control" id="escola-cidade" required onChange={this.getEscola.bind(this)}>
									{this.state.cidade.map((categoria) => {
										return (
											<option>
												{categoria}
											</option>
										)
									})}
								</select>
							</div>
							<div className="form-row">
								<label htmlFor="nome-escola"><strong>Nome da sua Escola</strong></label>
								<select className="form-control" id="nome-escola" required onChange={event => {
									var index = this.state.escola.nome.indexOf(event.target.value)
									this.setState({ aluno: { ...this.state.aluno, escola: this.state.escola.id[index - 1] } })
								}}>
									{this.state.escola.nome.map((categoria) => {
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
									required onChange={event => this.setState({ aluno: { ...this.state.aluno, nome: event.target.value } })} />
								<label htmlFor="ano-escolar"><b>Ano escolar</b></label>
								<select className="form-control" name="ano-escolar" id="ano-escolar" required onChange={event => this.setState({ aluno: { ...this.state.aluno, ano_letivo: event.target.value } })}>
									<option>1o. ano - Fundamental</option>
									<option>2o. ano - Fundamental</option>
									<option>3o. ano - Fundamental</option>
									<option>4o. ano - Fundamental</option>
									<option>5o. ano - Fundamental</option>
									<option>6o. ano - Fundamental</option>
									<option>7o. ano - Fundamental</option>
									<option>8o. ano - Fundamental</option>
									<option>9o. ano - Fundamental</option>
									<option>1o. ano - Ensino Médio</option>
									<option>2o. ano - Ensino Médio</option>
									<option>3o. ano - ensino Médio</option>
								</select>
							</div>
						</fieldset>
					</form>
					<hr />
					<form id="form-inclui-materiais" >
						<div className="container pl-0">
							<h2 className="titulo-3 ml-0">Lista de Materiais</h2>
							<p className="titulo-5 ml-0">Selecione os materiais que gostaria de receber como doação.<br />Lembre-se de solicitar somente o que realmente precisa, para que todos possam receber auxílio!</p>
							<div className="row container-lista">
								<div className="col-sm">
									<fieldset className="categorias-materiais" id="materiais-papelaria" onChange={this.handlerAddItem.bind(this)}>
										<legend className="titulo-5 titulo-form">Papelaria</legend>
										<p><label><input className="checkbox-lista" type="checkbox" name="Apontador" />Apontador</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Borracha" />Borracha</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Caderno" />Cadernos</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Canetas" />Canetas</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Cola" />Cola</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Corretivo" />Corretivo</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Estojo" />Estojo</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Hidrocor" /></label>Hidrocor</p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Lápis" />Lápis</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Lápis de Cor" />Lápis de Cor</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Marcador de Texto" />Marcador de Texto</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Mochila" />Mochila</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Régua" />Régua</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Tesoura sem ponta" />Tesoura sem ponta</label></p>

									</fieldset>
								</div>
								<div className="col-sm">
									<fieldset className="categorias-materiais" id="materiais-eletronicos" onChange={this.handlerAddItem.bind(this)}>
										<legend className="titulo-5 titulo-form">Eletronicos</legend>
										<p><label><input className="checkbox-lista" type="checkbox" name="Calculadora" />Calculadora</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Celular" />Celular</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Computador" />Computador</label></p>
										<p><label><input className="checkbox-lista" type="checkbox" name="Tablet" />Tablet</label></p>
									</fieldset>
								</div>
							</div>
						</div>
						<Link to='/home' onSubmit={async (event) => {
							await axios.post('http://localhost:3001/aluno/cadastrar', this.state.aluno);
							event.preventDefault()
							this.setState({ redirect: true })
						}}>
							<button className="botao btn btn-secondary" type="button" >Voltar</button>
						</Link>
						<button className="botao btn botao-enviar ml-3" type="submit" >Enviar</button>
					</form>
				</div>
			</div>

		)
	}
}

export default CadastroAluno;