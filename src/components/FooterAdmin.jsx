import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Logo from '../assets/Logo_webihouse.png'
import './styleComponent.css'

const FooterAdmin = () => {
  return (
    <div>

        <footer style={{backgroundColor:'#FAFAFBFF'}} className='p-4 mt-5'>
      <Container>
          <Row>
            <Col md={3}>
            <img src={Logo} alt="Logo" style={{width:'150px'}} />
            </Col>
           <Col md={3}>
           <h3>Menu</h3>
           <div className='footer-nav d-flex flex-column' >
           <a href="" >Dashboard</a>
           <a href="">Form</a>
           <a href="">Unit List</a>
           </div>
           </Col>
          </Row>
      </Container>
        </footer>
    </div>
  )
}

export default FooterAdmin