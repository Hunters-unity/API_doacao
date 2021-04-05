import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import axios from 'axios'
import logoEduacao from '../Imagens/logo-eduacao.png';
import '../../css/AppStyle.css';


function Navegacao(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="mr-5"><img src={logoEduacao} alt="logo eduação" className="" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to='/Home'>Página Inicial</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='/PaginaErro'>Como Doar</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=""><Link to='/Escolas'>Escolas</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=""><Link to='/PaginaErro'>Contato</Link></NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Cadastre-se
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to='/CadastroEscola'>Escolas</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/CadastroResponsavel'>Responsável</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <button className="botao botao-login"><Link to='/Login' className="texto-login">Login</Link></button>                    
                </Collapse>
            </Navbar>
            <div>
                <area class="top-area" alt='top-gradient' />
            </div>
        </div>
    );
}



export default Navegacao;