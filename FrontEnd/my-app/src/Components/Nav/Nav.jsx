import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './StyleNav.css'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, } from 'reactstrap'
  

class Example extends Component { //ARRUMAR NOME DA CLASSE : Nav ou Navbar
    render() {
        return (
            <div>
             <nav>
                    <div className='logo'>
                        <h3>EDUAÇÃO</h3>
                    </div>


                    <ul className="nav-link">
                        <Link to='/'>
                            <li>Início</li>
                        </Link>
                        <Link to='/'>
                            <li>Escolas</li>
                        </Link>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Cadastro
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to='/CadastroEscola'>
                                        Escolas
                                     </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/CadastroResponsavel'>
                                        Responsável
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ul>
                    <p>login</p>
                </nav>
                <div>
                    <area class="top-area" alt='top-gradient' />
                </div>
            </div>
        )
    }
}

export default Example; //ARRUMAR NOME