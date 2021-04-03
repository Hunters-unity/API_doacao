import React, { useState } from 'react';
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
//import "./AppStyle.css"
import axios from 'axios'



//MARCOS POR FAVOR NAO CONSEGUI AJUSTAR O CAMINHO DA IMAGEM DO LOGO ABAIXO, EM NAVBARBRAND
function Landing (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-5"><img src=".img/logo-eduacao.png" alt="logo eduação" className="" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Início</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Como Doar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Escolas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contato</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cadastre-se
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Escolas
                </DropdownItem>
                <DropdownItem>
                  Alunos
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Login</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Landing;