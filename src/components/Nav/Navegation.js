import React from 'react' 
import Logo from '../../assets//images/logo.png'
import{Navbar, Nav} from 'react-bootstrap'

import './Nav.css'

const Navegation = props =>{
    return(
      <nav>
        <Navbar collapseOnSelect expand="lg" clas variant="dark">
        <Navbar.Brand href="#home"><image src={Logo}></image></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="mr-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sobre</Nav.Link>
            
            <Nav.Link href="#deets">Pesquise</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </nav>
    )
}



export default Navegation