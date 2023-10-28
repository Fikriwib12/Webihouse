import React from 'react';
import './styleComponent.css'
import { Button } from 'react-bootstrap';
import { BsTelephoneInbound } from 'react-icons/bs';

const ProfileCard = ({name}) => {
  return (
    <div className="profile-card">
    <div className="profile-card-top">
      {/* Konten di sini */}
      <div className='profile-card-item'>

    <div className="avatar ">
      <div className="avatar-image">
        <img src="https://img.lovepik.com/free-png/20211207/lovepik-female-character-avatar-png-image_401393950_wh1200.png" alt="a" />
      </div>
    </div>
    <div className='profile-card-txt mt-3 text-center'>
      <h5>{name}</h5>
      <p>Lorem ipsum dolor </p>
    </div>
    <div className='d-flex gap-2'>
      <Button >
        <BsTelephoneInbound/> 081317987889
      </Button>
    </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileCard;
