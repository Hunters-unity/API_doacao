import React, {Component} from "react";
import "./Style.css";

class CadastroAluno extends Component {
    render () {
        return (
            <div>
                <div class="moldura">
	<header>
		<h1>Faça seu cadastro!</h1>
		<p>É simples, rápido e GRÁTIS!</p>
	</header>
	<div class="container">
		<h2 class="titulo-formulario">Informações do Aluno</h2>
		<div>
			<img src="avatar-crianca.png">
			<p>Selecione o avatar do aluno</p>
		</div>
		
		<form id="form-info-aluno">
			<fieldset class="informacoes-aluno">
				<div class="form-row">
					<label for="rede-ensino"><strong>Rede de Ensino</strong></label>
				<select class="form-control" id="rede-ensino" required>
					<option selected disabled value="">Selecione</option>
					<option>Estadual</option>
					<option>Municipal</option>
				</select>
				</div>
				<div class="form-row">
					 <label for="nome-escola"><strong>Nome da Escola</strong></label>
			    <input class="form-control" type="text" name="nome-escola" id="nome-escola" placeholder="Nome completo da escola" autofocus required>
				</div>
				<div class="form-row">
					<label for="nome-aluno"><b>Nome do Aluno</b></label>
				    <input class="form-control" type="text" name="nome-aluno" id="nome-aluno" placeholder="Digite seu nome completo" required> <label for="data-nascimento"><b>Data de Nascimento</b></label>
				    <input class="form-control" type="date" name="data-nascimento" id="data-nascimento" required>
				</div>
			</fieldset>
		</form>
		<hr>
		<form id="form-inclui-materiais">
			<div class="container">
				<h2 class="titulo-formulario">Lista de Materiais</h2>
				<p class="text-center">Selecione os materiais que gostaria de receber como doação.<br>Lembre-se de solicitar somente o que realmente precisa, para que todos possam receber auxílio!</p>
				<div class="row">
					<div class="col-sm">
						<fieldset class="categorias-materiais" id="materiais-papelaria">
					<legend class="titulo-pequeno">Papelaria</legend>
					<p><label><input type=checkbox>Cadernos</label></p>
					<p><label><input type=checkbox>Estojo</label></p>
					<p><label><input type=checkbox>Lápis</label></p>
					<p><label><input type=checkbox>Canetas</label></p>
				</fieldset>
					</div>
					<div class="col-sm">
						<fieldset class="categorias-materiais" id="materiais-eletronicos">
							<legend class="titulo-pequeno">Eletronicos</legend>
							<p><label><input type=checkbox>Calculadora</label></p>
							<p><label><input type=checkbox>Celular</label></p>
							<p><label><input type=checkbox>Tablet</label></p>
						</fieldset>
					</div>
				</div>

				

				
			</div>
		</form>
		<a href="cadastro-responsavel.html"><button class="botao btn btn-secondary" type="button" >Voltar</button></a>
		<a href="cadastro-materiais.html"><button class="botao btn btn-primary" type="submit" onsubmit="">Avançar</button></a>
		<!--verificar link vs submit-->

	</div>
</div>
            </div>
        )
    }

}

export default CadastroAluno;