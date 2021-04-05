import React, { Component } from "react";
import '../../css/AppStyle.css';
import axios from "axios"
import imagemEscola from '../Imagens/escola-1.jpg'

class CadastroEscola extends Component {
    constructor() {
        super();
        this.state = {
            nome: "", cep: "", endereco: "", estado: "", numero: "",
            cidade: "", bairro: "", tipo: "Estadual", telefone: ""
        }

    }
    //coloca telefone no padrão (xx) xxxx-xxxx
    mascaraTelefone(event) {
        var telefone = event.target.value;
        if (telefone.length === 1) {
            event.target.value = '(' + telefone;
        }
        else if (telefone.length === 3) {
            event.target.value = telefone + ')';
        }

        else if (telefone.length === 8) {
            event.target.value = telefone + '-';
        }
        var telefoneNumero = event.target.value.replace(/\D/g, '');
        this.setState({ telefone: telefoneNumero })
    }

    mascaraCel(event) {
        var celular = event.target.value;
        if (celular.length === 1) {
            event.target.value = '(' + celular;
        }
        else if (celular.length === 3) {
            event.target.value = celular + ')';
        }
        else if (celular.length === 9) {
            event.target.value = celular + '-';
        }
    }
    //coloca cep no padrão  xxxxx-xxx
    mascaraCep(event) {
        var cep = event.target.value;
        if (cep.length === 5) {
            event.target.value = cep + '-';
        }
    }

    //limpa formulário de endereço
    limpaFormulárioCep(event) {
        document.getElementById('endereco').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('estado').value = ("");
        document.getElementById('cep').value = ("");
    }

    //pesquisa endereço por cep e preenche o formulário
    async pesquisaCep(event) {
        var cep = event.target.value;
        if (cep !== "" && cep.length === 9) {
            var validacep = cep.replace(/-/, "");
            if (validacep.match(/^\d+$/)) {
                this.setState({ cep: validacep })
                axios.get('https://viacep.com.br/ws/' + cep + '/json/?callback=endereco').then(async response => {
                    if (response.data.match("erro")) {
                        await this.limpaFormulárioCep();
                        alert("CEP inválido.");
                    } else {
                        var endereco = response.data.replace("endereco(", "");
                        endereco = JSON.parse(endereco.replace(");", ""));
                        document.getElementById('endereco').value = (endereco.logradouro);
                        this.setState({ endereco: endereco.logradouro })
                        document.getElementById('bairro').value = (endereco.bairro);
                        this.setState({ bairro: endereco.bairro })
                        document.getElementById('cidade').value = (endereco.localidade);
                        this.setState({ cidade: endereco.localidade })
                        document.getElementById('estado').value = (endereco.uf);
                        this.setState({ estado: endereco.uf })
                        console.log(response)
                    }
                });
            }
            else {
                this.limpaFormulárioCep();

            }
        }
        else {
            this.limpaFormulárioCep();
        }
    }

    render() {
        return (
            <div className="corpo">
                <div className="card">
                    <img src={imagemEscola} className="card-img-top imagem-card-escola" alt="Imagem da Escola" />
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
                <div className="container">

                    <form onSubmit={(event) => {
                        console.log(this.state)
                        axios.post('http://localhost:3001/escolas/cadastrar', this.state).then((response) => console.log(response)).catch((erro) => console.log(erro))
                        event.preventDefault()
                    }}>
                        <fieldset className="informacoes-escola">
                            <div className="form-row">
                                <label htmlFor="nome-escola"><strong>Nome da Escola</strong></label>
                                <input className="form-control" type="text" name="nome-escola" id="nome-escola" autoFocus placeholder="Nome completo da escola" onChange={(event) => this.setState({ nome: event.target.value })} required />
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <label htmlFor="rede-ensino"><strong>Rede de Ensino</strong></label>
                                    <select className="form-control" id="rede-ensino" required onChange={(evento) => this.setState({ tipo: evento.target.value })}>
                                        <option defaultValue disabled value="">Selecione</option>
                                        <option>Estadual</option>
                                        <option>Municipal</option>
                                    </select>
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="telefone"><b>Telefone: </b></label>
                                    <input className="form-control" type="text" id="telefone" onKeyPress={this.mascaraTelefone.bind(this)} maxLength="13" />
                                </div>                               
                            </div>
                            <div className="form-row">
                                <label htmlFor="email"><strong>E-mail:</strong></label>
                                <input className="form-control" type="email" id="email" required />
                            </div>
                            <div className="form-row">
                                <label className="form-check-label" htmlFor="mensagem-email"><input className="form-check-input" type="checkbox" id="mensagem-email" /><b>Permitir o envio de mensagens via e-mail?</b></label>
                            </div>                            
                        </fieldset>
                        <hr />

                        <fieldset className="form-endereco">
                            <div className="form-row">
                                <div className="col-sm">
                                    <label htmlFor="cep"><b>CEP</b></label>
                                    <input className="form-control" type="text" name="cep" id="cep" onBlur={this.pesquisaCep.bind(this)} onKeyPress={this.mascaraCep.bind(this)} maxLength="9" required />
                                </div>

                                <div className="col-sm">
                                    <label htmlFor="estado"><strong>Estado</strong></label>
                                    <input className="form-control" type="text" name="estado" id="estado" required readOnly />
                                </div>

                                <div className="col-sm">
                                    <label htmlFor="cidade"><strong>Cidade</strong></label>
                                    <input className="form-control" type="text" name="cidade" id="cidade" required readOnly />
                                </div>
                            </div>
                            <div className="form-row">
                                <label htmlFor="endereco"><strong>Endereço</strong></label>
                                <input className="form-control" type="text" name="endereco" id="endereco" required readOnly />
                            </div>
                            <div className="form-row">
                                <div className="col-sm-2">
                                    <label htmlFor="numero-endereco"><b>Numero</b></label>
                                    <input className="form-control" type="text" name="numero-endereco" id="numero-endereco" required onChange={(evento) => this.setState({ numero: evento.target.value })} />
                                </div>

                                <div className="col-sm">
                                    <label htmlFor="complemento-endereco"><b>Complemento</b></label>
                                    <input className="form-control" type="text" name="complemento-endereco" id="complemento-endereco" />
                                </div>

                                <div className="col-sm">
                                    <label htmlFor="bairro"><strong>Bairro</strong></label>
                                    <input className="form-control" type="text" name="bairro" id="bairro" required readOnly />
                                </div>
                            </div>
                        </fieldset>              
                            
                            
                            

                       

                        <button className="btn botao botao-enviar " type="submit" >Enviar</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default CadastroEscola;