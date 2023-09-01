import React from 'react'
import './sideAbout.css';

import { IoIosClose } from 'react-icons/io';
import { FaLocationDot, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

import { FaPhoneAlt } from 'react-icons/fa';

import sideaboutImg1 from '../../assets/sideabout-gallery1.jfif';
import sideaboutImg2 from '../../assets/sideabout-gallery2.jfif';
import sideaboutImg3 from '../../assets/sideabout-gallery3.jfif';
import sideaboutImg4 from '../../assets/sideabout-gallery4.jfif';
import sideaboutImg5 from '../../assets/sideabout-gallery5.jfif';
import sideaboutImg6 from '../../assets/sideabout-gallery6.jfif';

import logoBlack from '../../assets/maximus-logo-black.png';

const SideAbout = (props) => {
  return (
    <div className={`maximus__sideabout ${props.className}`}>
      <div className="maximus__sideabout-logo_close">
        <img src={logoBlack} alt="logo" />
        <IoIosClose color="#ff0336" size={56} onClick={() => props.setToggleSideAbout(false)} />
      </div>

      <div className="maximus__sideabout-aboutus">
        <h3>About Us</h3>
        <p>Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>
      </div>

      <div className="maximus__sideabout-gallery">
        <h3>Gallery</h3>
        <div className="maximus__sideabout-gallery_images">
            <img src={sideaboutImg1} alt="gallery-img" />
            <img src={sideaboutImg2} alt="gallery-img" />
            <img src={sideaboutImg3} alt="gallery-img" />
            <img src={sideaboutImg4} alt="gallery-img" />
            <img src={sideaboutImg5} alt="gallery-img" />
            <img src={sideaboutImg6} alt="gallery-img" />
        </div>
      </div>

      <div className="maximus__sideabout-contact">
        <h3>Contact Info</h3>
        <p><FaLocationDot /> Armii Krajowej 9, Opole</p>
        <p><FaPhoneAlt /> +48 123-456-789</p>
        <p><FaEnvelope /> maximus@maxmail.com</p>
      </div>

      <div className="maximus__sideabout-follow">
        <h3>Follow Us</h3>
        <div className="maximus__sideabout-follow_icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default SideAbout