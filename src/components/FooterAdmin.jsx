import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Logo from '../assets/Logo_webihouse.png'
import './styleComponent.css'
import { useNavigate } from 'react-router-dom'

const FooterAdmin = () => {

  const navigate = useNavigate()

  return (
    <div>

        <footer style={{backgroundColor:'#FAFAFBFF'}} className='p-4 '>
      <Container>
          <Row>
            <Col md={3}>
            <img src={Logo} alt="Logo" style={{width:'150px'}} />
            </Col>
           <Col md={3}>
           <h3>Menu</h3>
           <div className='footer-nav d-flex flex-column gap-2' >
           <a href="" onClick={() => navigate('/admin/dashboard') } >Dashboard</a>
           <a href="" onClick={() => navigate('/admin/form') }>Form</a>
           <a href="" onClick={() => navigate('/admin/list') }>Unit List</a>
           </div>
           </Col>
          </Row>
      </Container>
        </footer>
    </div>
  )
}

export default FooterAdmin