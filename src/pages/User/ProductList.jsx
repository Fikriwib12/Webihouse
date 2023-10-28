import React, { useState, useEffect } from 'react'
import { fetchWebihouseData } from '../../api'
import NavUser from '../../components/NavUser'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

import FooterUser from '../../components/FooterUser'


function ProductList() {
    const [webihouseData, setWebihouseData] = useState([])
    const location = useLocation();

   useEffect(() => {
        fetchWebihouseData()
            .then((data) => {
                setWebihouseData(data);
                
                const status = location?.state?.status
                const domisili = location?.state?.domisili
                if (status) {
                    // Filter data berdasarkan status
                    const filteredData = data.filter((item) => item.status === status);
                    setWebihouseData(filteredData);
                }
                if(domisili){
                    const filteredData = data.filter((item)=> item.domisili === domisili)
                    setWebihouseData(filteredData)
                }
            })
            .catch((error) => console.error(error));
    }, [location]);

    
    const initialItemsToShow = 6;
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

    const handleLoadMore = () => {
        
        setItemsToShow(itemsToShow + 6); 
    };

    const navigate = useNavigate()

    const [searchKeyword, setSearchKeyword] = useState('')

    const filteredData = webihouseData
        .filter((item) => (
            !searchKeyword ||
            item.Title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.domisili.toLowerCase().includes(searchKeyword.toLowerCase())
        ));


    
    return (
        <div>
            <NavUser/>
            <Container>
            
            <div className="d-flex justify-content-center my-3">
            <div className="input-group">
            <span className="input-group-text">
              <FiSearch /> {/* Menambahkan ikon pencarian */}
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="form-control" // Tidak perlu mx-auto lagi
            />
            </div>
            </div>

                <h3>Unit List</h3>
                

                <Row>
                    {filteredData.slice(0, itemsToShow).map((item) => (
                        <Col key={item.id} md={4} style={{ marginBottom: '20px' }}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img variant="top" src={item.imageProduct} style={{ height: '400px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Text style={{fontSize:'14px', color:'#6D31EDFF'}}>{item.status}</Card.Text>
                                    <Card.Title>{item.Title}</Card.Title>
                                    <Card.Title>Harga: {item.harga} Juta</Card.Title>
                                    <Button variant="primary" style={{width:'330px', backgroundColor:'#6D31EDFF', borderColor:'#6D31EDFF'}} className='mt-4 mb-5' onClick={() => navigate(`/detailproduct/${item.id}`, {state: {id:item.id}})}>Detail </Button>
                                    
                                </Card.Body>
                                <Button style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '12px', borderRadius:'14px', backgroundColor:'#A8ADB7FF', borderColor:'#A8ADB7FF' }}>{item.domisili}</Button>
                            </Card>
                        </Col>
                        
                    ))}
                </Row>
                {itemsToShow < webihouseData.length && (
                <div className='d-flex justify-content-center'>
                <Button onClick={handleLoadMore} className='load-more'>Load More</Button>
                </div>
                )}
                
                
            </Container>

            <FooterUser/>
        </div>
    )
}

export default ProductList