import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroAluno from './Components/Aluno/CadastroAluno'
import PaginaDoacao from './Components/Doacao/PaginaDoacao'
import CadastroEscola from './Components/Escola/CadastroEscola'
import FormCadastro from './Components/CadastroResponsavel/CadastroPerfil'
import Landing from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import Navegacao from './Components/Nav/Nav'
import LoginResponsavel from './Components/CadastroResponsavel/LoginResposavel'
import CardEscola from './Components/Escola/CardEscola'


function Rotas() {
    return (
        <Router>
            <Navegacao/>
            <Switch>
                <Route path="/CadastroEscola" component={CadastroEscola}/>
                <Route path="/CadastroResponsavel" component={FormCadastro}/>
                <Route path="/CadastroAluno" component={CadastroAluno}/>
                <Route path="/Doacao" component={PaginaDoacao}/>
                <Route path="/" exact component={Home} />
                <Route path="/Landing" component={Landing}/>
                <Route path="/Login" component={LoginResponsavel}/>
                <Route path="/Escolas" component={CardEscola}/>
            </Switch>
        </Router>
    )
}

export default Rotas;