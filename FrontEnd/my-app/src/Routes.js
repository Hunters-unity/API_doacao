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
import Escolas from './Components/Escola/Escolas'
import PaginaNaoEncontrado from './Components/Nav/NaoEncontrado'
import MateriaisDoados from './Components/Doacao/MateriaisDoados'
import SucessoDoacao from './Components/Nav/SucessoDoacao'
import Alunos from './Components/Aluno/Alunos'

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
                <Route path="/escolas/" exact component={Escolas}/>
                <Route path="/paginaerro" component={PaginaErro}/>
                <Route path="/naoencontrado" component={PaginaNaoEncontrado}/>
                <Route path="/materiaisdoados" component={MateriaisDoados}/>
                <Route path="/sucessodoacao" component={SucessoDoacao}/>
                <Route path="/alunos/" component={Alunos}/>
            </Switch>
        </Router>
    )
}

export default Rotas;