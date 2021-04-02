import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CadastroAluno from './Components/Aluno/CadastroAluno'
import PaginaDoacao from './Components/Doacao/PaginaDoacao'
import CadastroEscola from './Components/Escola/CadastroEscola'
import FormCadastro from './Components/CadastroResponsavel/CadastroPerfil'
import Home from './Components/Home/Home'


function Nav() {
    return (
        <Router>
            <Switch>
                <Route path="/CadastroEscola" component={CadastroEscola}/>
                <Route path="/CadastroResponsavel" component={FormCadastro}/>
                <Route path="/CadastroAluno" component={CadastroAluno}/>
                <Route path="/Doacao" component={PaginaDoacao}/>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default Nav;