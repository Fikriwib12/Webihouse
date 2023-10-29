  import React from 'react'
  import { Container, Nav, Navbar, Button } from 'react-bootstrap'
  import Logo from '../assets/Logo_webihouse.png'
  import './styleComponent.css'
import { useNavigate } from 'react-router-dom'

  const NavUser = () => {
    const navigate = useNavigate()
    return (
      <div>
          <Navbar expand="lg" className="bg-body-white navCustom" style={{maxHeight: '119px'}}>
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="Logo" style={{maxWidth:'110px'}} onClick={()=> navigate('/')} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto ">
              <Nav.Link onClick={()=> navigate('/productlist', {state: {status : "Disewakan"}})}>Disewakan</Nav.Link>
              <Nav.Link onClick={()=> navigate('/productlist', {state: {status : "Dijual"}})}>Dijual</Nav.Link>
              <Nav.Link onClick={()=> navigate('/productlist')}>Cari Rumah</Nav.Link>
              <Nav.Link onClick={()=> navigate('/webibot')}>Webibot</Nav.Link>
              <Nav.Link onClick={()=> navigate('/webibot')}>About Us</Nav.Link>
            </Nav>
            <Nav className='me-0'>
            <Nav.Link ><Button>Titipkan Unit anda</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }

  export default NavUser