import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Logo from '../assets/Logo_webihouse.png'

const FooterAdmin = () => {
  return (
    <div>

        <footer style={{backgroundColor:'#FAFAFBFF'}} className='p-4 mt-5'>
      <Container>
          <Row>
            <Col>
            <img src={Logo} alt="Logo" style={{width:'150px'}} />
            </Col>
            <Col>
            <h5>Rumah Di Jakarta</h5>
            <div className='d-flex flex-column' style={{fontSize:'14px'}}>
            <a href='' className='mb-2'>Jakarta Utara</a>
            <a href='' className='mb-2'>Jakarta Selatan</a>
            <a href='' className='mb-2'>Jakarta Pusat</a>
            <a href='' className='mb-2'>Jakarta Barat</a>
            <a href=''>Jakarta Timur</a>
            </div>
            </Col>
            <Col>
            <h5>Rumah Di Bodetabek</h5>
            <div className='d-flex flex-column' style={{fontSize:'14px'}}>
            <a href='' className='mb-2'>Bogor</a>
            <a href='' className='mb-2'>Depok</a>
            <a href='' className='mb-2'>Tanggerang</a>
            <a href=''>Bekasi</a>
            </div>
            </Col>
            <Col>
            <h5>Company</h5>
            <div className="d-flex flex-column" style={{textDecoration:"none"}}>
            <p>About us</p>
            <p>Contact Us</p>
            </div>
            </Col>
            <Col>
            <h6 style={{fontSize:'14px', color:'#6D31EDFF', fontWeight:'bold'}}>Susah untuk menjual dan menyewakan rumah anda</h6>
            <p style={{fontSize:'13px'}} className='mt-3'>Tenang Kami Punya solusinya</p>
            <Button>Titipkan Unit anda</Button>
            </Col>
          </Row>
      </Container>
        </footer>
    </div>
  )
}

export default FooterAdmin