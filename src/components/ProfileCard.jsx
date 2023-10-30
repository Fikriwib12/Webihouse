import React from 'react';
import './styleComponent.css'
import { Button } from 'react-bootstrap';
import { BsTelephoneInbound } from 'react-icons/bs';

const ProfileCard = ({name, imageAvatar, contact}) => {

  const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/266/266033.png'

  return (
    <div className="profile-card">
    <div className="profile-card-top">
      {/* Konten di sini */}
      <div className='profile-card-item'>

    <div className="avatar ">
      <div className="avatar-image">
         <img src={imageAvatar || defaultAvatar} alt="a" />
      </div>
    </div>
    <div className='profile-card-txt mt-3 text-center'>
      <h5>{name}</h5>
      
    </div>
    <div className='d-flex mt-3 '>
      <Button >
        <BsTelephoneInbound/> {contact}
      </Button>
    </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileCard;
