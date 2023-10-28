    import React, { useState, useEffect } from 'react';
    import { useLocation } from 'react-router-dom';
    import { fetchProductById } from '../../api';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/swiper-bundle.css';
    import NavUser from '../../components/NavUser';
    import { Container, Row, Col,} from 'react-bootstrap';
    import Line from '../../components/Line';
    import FooterUser from '../../components/FooterUser'
    import ProfileCard from '../../components/ProfileCard'
    import {FaStairs, FaBed, FaBath} from 'react-icons/fa6'
    import './User.css'

    const DetailProduct = () => {
        const location = useLocation();
        const { id } = location.state;

        const [product, setProduct] = useState(null);

        useEffect(() => {
            fetchProductById(id)
                .then((productData) => {
                    setProduct(productData);
                })
                .catch((error) => {
                    console.error(error);
                });
        }, [id]);


        const [showFullDescription, setShowFullDescription] = useState(false);

        const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
        };

        return (
            <div>
                <NavUser/>
            

                <Container>
                {product ? (
                    <div className='mt-1'>
                        <Swiper
                            navigation={true}
                            pagination={{ clickable: true }}
                            spaceBetween={420}
                            slidesPerView={3}
                            autoplay={{ delay: 2500 }}
                        >
                            <SwiperSlide>
                                <img
                                    src={product.imageProduct}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[0]}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[1]}
                                    alt=""
                                    style={{ width: '500px', height: '400px' ,objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[2]}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[3]}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className=' p-card'>
                        <ProfileCard
                        name={product.name}/> 
                        </div>
                        

                        <div className='mt-4'>

                        <h4>{product.Title}</h4>
                        <h5 className='mt-4'>Harga: {product.harga}</h5>
                        <Line/>
                        <Row>
                        <Col md={6}>
                        
                        <div className='deskripsi' style={{width:'500px'}}>

                        <h6 className='mt-4'>Deskripsi</h6>
                        <p className='mt-2'>
                            {showFullDescription
                                ? product.description
                                : product.description.substring(0, 100) 
                                }
                        </p>
                            {!showFullDescription && (
                                <button onClick={toggleDescription} className='btn btn-link' style={{fontSize:'15px'}}>
                                    Show More
                                </button>
                            )}
                        </div>
                        </Col>
                        <Col md={6}>
                        <div>
                    
                        </div>
                        </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                        <Line/>
                        

                        <div className='mt-4'>
                            <h6>Fasilitas</h6>

                            <div className='mt-2'>
                            <Row>
                                <Col md={3}>
                                <div style={{fontSize:'18px'}}>
                                <p>LT : {product.fasilitas[0]}</p>
                                <p>LB : {product.fasilitas[1]}</p>
                                <i><FaStairs/> : {product.fasilitas[2]}</i>
                                </div>
                                </Col>
                                <Col>
                                <div className='d-flex flex-column' style={{fontSize:'23px'}}>
                                <i><FaBed/> : {product.fasilitas[3]}</i>
                                <i><FaBath/> : {product.fasilitas[4]}</i>
                               
                                </div>
                                </Col>
                            </Row>
                            </div>
                        </div>
                        </div>
                
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

                
                </Container>
                <FooterUser/>
            </div>
        );
    };

    export default DetailProduct;
