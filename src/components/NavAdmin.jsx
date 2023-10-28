import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import Logo from '../assets/Logo_webihouse.png'
import './styleComponent.css'
import { useNavigate } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'

const NavAdmin = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Navbar expand="lg" className="bg-body-white navCustom">
      <Container>
        <SidebarAdmin/>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" style={{maxWidth:'132px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  onClick={()=> navigate ('/admin/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link  onClick={() => navigate ('/admin/form') }>Form</Nav.Link>
            <Nav.Link  onClick={() => navigate ('/admin/list')}>Unit List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavAdmin