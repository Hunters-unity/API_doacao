import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroAluno from './Components/CadastroAluno/CadastroAluno'
import PaginaDoacao from './Components/CadastroDoacao/PaginaDoacao'
import CadastroEscola from './Components/CadastroEscola/CadastroEscola'
import FormCadastro from './Components/CadastroResponsavel/CadastroPerfil'
import LandingPage from './Components/LandingPage/LandingPage'


function Nav() {
    return (
        <Router>
            <Switch>
                <Route path="/CadastroEscola" component={CadastroEscola}/>
                <Route path="/CadastroResponsavel" component={FormCadastro}/>
                <Route path="/CadastroAluno" component={CadastroAluno}/>
                <Route path="/Doacao" component={PaginaDoacao}/>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default Nav;