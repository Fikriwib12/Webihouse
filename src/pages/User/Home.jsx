import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavUser from '../../components/NavUser'
import FooterUser from '../../components/FooterUser'
import HeroImg from '../../components/hero.jpg';
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { fetchWebihouseData } from '../../api';
import CarouselDomisili from '../../components/CarouselDomisili';


const Home = () => {
    const navigate = useNavigate()
    const [webihouseData, setWebihouseData] = useState([])

    useEffect(() => {
      fetchWebihouseData()
      .then((data)=> setWebihouseData(data))
      .catch((error)=> console.error(error))
    }, [])

    

    const slicedWebihouseData = webihouseData.slice(0, 3);
    
  return (
    <div>
        <NavUser/>

        {/* hero card */}
        <Card>
        <Card.Img src={HeroImg} alt="cardimg" style={{ height: '232px', objectFit: 'cover', filter: 'blur(2px)' }} />
        <Card.ImgOverlay>
          <div className='d-flex justify-content-center align-items-center flex-column'>
           
            <h1 style={{color:'white', fontSize:'70px'}} className='mt-4'>WEBI HOUSE</h1>
            <h4 style={{color:'white'}}>Website Terpercaya Jual Beli Dan Sewa Rumah</h4>
          </div>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>

        {/* {end Hero card} */}

        <Container>
          <div>

          <h3 className='mt-5'>List Unit</h3>
          <div className='text-end mb-2'>
            <a href="" onClick={()=> navigate ('/productlist')} >View More</a>
          </div>
           
          </div>

          <Row>

          {slicedWebihouseData.map((item)=> (
            <Col key={item.id} md={4} className='mb-5'>
            
            <Card onClick={() => navigate(`/detailproduct/${item.id}`, {state: {id:item.id}})} style={{ width: '23rem' }}>
              <Card.Img
              variant="top" src={item.imageProduct} style={{ height: '376px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Text style={{fontSize:"13px", color:"#9095A1FF" }}>
                  {item.status}
                </Card.Text>
                <Card.Title>
                  {item.Title}
                </Card.Title>
                <Card.Text className='mt-3'>
                  Lokasi: {item.domisili}
                </Card.Text>
                <Button style={{backgroundColor:'#6D31EDFF', borderColor:'#6D31EDFF'}} >
                  Detail
                </Button>
              </Card.Body>
            </Card>
            </Col>
          ) )}
          </Row>

          <h4 className='mt-5 mb-3'>Cari Rumah Di...</h4>

          <CarouselDomisili/>

          
          

          
        </Container>
        
        <FooterUser/>
    </div>
  )
}

export default Home