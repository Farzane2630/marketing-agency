import React from 'react'
import {Navbar, Nav, NavDropdown, Container,} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navigationbar () {
 
  return (
    <Container style={{padding: 0}} fluid>
    <nav>
            <img id="home" src='https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png.webp' alt='logo'></img>
            <ul className='nav-items'>
                <li><Link to={'/'}> Home </Link></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#services"> Services </a></li>
                <li><a href="#case-study"> Case Study </a></li>
                <li><Link to="/blog"> Blog </Link></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
            <div className='phone'>
                <p> Call Us: +10 (78) 378 3784 </p>
            </div>
            <button className='talk but-color'> Let`s Talk </button>
        </nav>
    {/* <Container bg='light' className='nav-container' fluid>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#brand">
        <img src='https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png.webp' alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#case-study">Case Study</Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Elements</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container> */}
        
    </Container>
  )
}
