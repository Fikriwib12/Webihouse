import React from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import HeroImg from './hero.jpg';

const HeroCard = () => {
  return (
    <div>
      <Card>
        <Card.Img src={HeroImg} alt="cardimg" style={{ height: '232px', objectFit: 'cover' }} />
        <Card.ImgOverlay>
          <div className='d-flex justify-content-center'>
            <InputGroup className='mt-5'>
              <FormControl
                placeholder='Cari properti...'
                aria-label='Cari properti...'
                aria-describedby='basic-addon2'
              />
              <Button variant='primary' id='button-addon2'>
                Cari
              </Button>
            </InputGroup>
          </div>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default HeroCard;
