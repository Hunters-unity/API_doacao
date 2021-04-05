import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroAluno from './Components/Aluno/CadastroAluno'
import PaginaDoacao from './Components/Doacao/PaginaDoacao'
import CadastroEscola from './Components/Escola/CadastroEscola'
import FormCadastro from './Components/Responsavel/CadastroPerfil'
import Landing from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import PaginaErro from './Components/Nav/PaginaErro'
import NavBar from './Components/Nav/Nav'
import LoginResponsavel from './Components/Responsavel/LoginResposavel'
import CardEscola from './Components/Escola/CardEscola'
import Escolas from './Components/Escola/Escolas'
import PaginaNaoEncontrado from './Components/Nav/NaoEncontrado'
import SucessoDoacao from './Components/Nav/SucessoDoacao'

function Rotas() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/cadastroEscola" component={CadastroEscola}/>
                <Route path="/cadastroResponsavel" component={FormCadastro}/>
                <Route path="/cadastroAluno" component={CadastroAluno}/>
                <Route path="/doacao" component={PaginaDoacao}/>
                <Route path="/home" component={Home} />
                <Route path="/" exact component={Landing}/>
                <Route path="/login" component={LoginResponsavel}/>
                <Route path="/escolas/" component={Escolas}/>
                <Route path="/paginaerro" component={PaginaErro}/>
                <Route path="/naoencontrado" component={PaginaNaoEncontrado}/>
                <Route path="/sucessodoacao" component={SucessoDoacao}/>
            </Switch>
        </Router>
    )
}

export default Rotas;