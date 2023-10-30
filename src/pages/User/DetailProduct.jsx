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

        const defaultImg = 'https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg'

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
                                    src={product.imageDetail[0] || defaultImg}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[1] || defaultImg}
                                    alt=""
                                    style={{ width: '500px', height: '400px' ,objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[2] || defaultImg}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={product.imageDetail[3] || defaultImg}
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg"
                                    alt=""
                                    style={{ width: '500px', height: '400px', objectFit:'cover'}}
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className=' p-card'>
                        <ProfileCard
                        name={product.name}
                        imageAvatar={product.imageAvatar}
                        contact={product.contact}/> 
                        </div>
                        

                        <div className='mt-4'>

                        <h4>{product.status} {product.Title}</h4>
                        <h6 className='mt-3' style={{color:'grey'}}>Domisili: {product.domisili}</h6>
                        <h5 className='mt-4'>Harga: {product.harga}</h5>
                        <Line/>
                        <Row>
                        <Col md={6}>
                        
                        <div className='deskripsi' style={{width:'500px'}}>

                        <h6 className='mt-4'>Deskripsi</h6>
                        <pre className='mt-2'>
                            {showFullDescription
                                ? product.description
                                : product.description.substring(0, 100) 
                                }
                        </pre>
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
                                <p>LT : {product.fasilitas[0]} m<sup>2</sup></p>
                                <p>LB : {product.fasilitas[1]} m<sup>2</sup></p>
                                <i><FaStairs/> : {product.fasilitas[2]}</i>
                                </div>
                                </Col>
                                <Col>
                                <div className='d-flex flex-column' style={{fontSize:'18px'}}>
                                <i><FaBed/> : {product.fasilitas[3]}</i>
                                <i><FaBath/> : {product.fasilitas[4]}</i>
                               
                                </div>
                                </Col>
                                <p className='mt-4'>*Jika ingin mengetahui fasilitas lebih detail silahkan hubungi contact pemilik</p>
                            </Row>

                            <Line/>
                            <div className='mt-4'>
                            <h5>Lokasi Rumah</h5>
                            <iframe src={product.gmaps} style={{width:'700px', height:'200px'}}></iframe>    
                            </div>
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
