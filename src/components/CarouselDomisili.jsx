import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styleComponent.css'
import { useNavigate } from 'react-router-dom';

const CarouselDomisili = () => {
  const navigate = useNavigate()
  const items = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/id/thumb/b/b1/Merdeka_Square_Monas_02.jpg/800px-Merdeka_Square_Monas_02.jpg',
      text: 'Jakarta Pusat',
      onclick:()=> navigate('/productlist', {state: {domisili : "Jakarta Pusat"}})
    },
    {
      image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/12/14/d51b087c-0d57-409c-af21-480a5a429cbc-1639490594644-ad2647616fb079895bd280202c75a370.jpg',
      text: 'Jakarta Utara',
      onclick:()=> navigate('/productlist', {state: {domisili : "Jakarta Utara"}})
    },
    {
      image: 'https://img.inews.co.id/media/600/files/inews_new/2023/05/31/TMII.jpg',
      text: 'Jakarta Timur',
      onclick:()=> navigate('/productlist', {state: {domisili : "Jakarta Timur"}})
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/SCBD%2C_Jakarta.jpg',
      text: 'Jakarta Selatan',
      onclick:()=> navigate('/productlist', {state: {domisili : "Jakarta Selatan"}})
    },
    {
      image: 'https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2021/12/jakarta-barat.webp',
      text: 'Jakarta Barat',
      onclick:()=> navigate('/productlist', {state: {domisili : "Jakarta Timur"}})
    },
    {
      image: 'https://www.oyorooms.com/travel-guide/id/wp-content/uploads/sites/6/2022/10/6-Destinasi-Wisata-Tersembunyi-di-Tangerang.jpg',
      text: 'Tanggerang',
      onclick:()=> navigate('/productlist', {state: {domisili : "Tanggerang"}})
    },
    {
      image: 'https://hima.pwk.its.ac.id/wp-content/uploads/2022/09/tugu-kujang-di-kota-bogor-hjb-49558697.jpg',
      text: 'Bogor',
      onclick:()=> navigate('/productlist', {state: {domisili : "Bogor"}})
    },
    {
      image: 'https://asset.kompas.com/crops/_NRrco8g6CTluqwWLyguXb4SRhg=/98x0:944x564/750x500/data/photo/2021/12/02/61a8d64decf69.jpg',
      text: 'Depok',
      onclick:()=> navigate('/productlist', {state: {domisili : "Depok"}})
    },
    {
      image: 'https://cdn0-production-images-kly.akamaized.net/AVMnrAa_T3CD4sE4f14QN5LFZhE=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3422679/original/050633300_1617809445-kawasan_finansial_-_gedung_menara_mandiri.jpg',
      text: 'Bekasi',
      onclick:()=> navigate('/productlist', {state: {domisili : "Bekasi"}})
    },
    
  ];
  return (
    <div>
        <div className='d-flex carousel'>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          centerMode={false}
          className=''
          containerClass='container'
          customTransition='all 1s linear'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass='caro' 
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          swipeable
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          }}
        >
            {items.map((item, index) => (
            <div className='caro-item' key={index} onClick={item.onclick}>
              <img src={item.image} alt={`Image ${index}`} style={{ width: '350px', height: '350px', objectFit:'fill', filter:'blur(1px)' }} />
              <div className='centered-text'>{item.text}</div>
            </div>
          ))}
        
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselDomisili