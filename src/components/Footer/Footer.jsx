import React from 'react';
import './footer.css';

import logoImgBlack from '../../assets/maximus-logo-black.png';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="maximus__footer">
        <div className="maximus__footer-content">
            <div className="maximus__footer-content_info">
                <img src={logoImgBlack} alt="logo" />
                <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className="maximus__footer-content_info-socials">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                </div>
                <p>
                    Privacy Policy | © 2023 Maximus
                    <br/>
                    Design by RadiusTheme
                </p>
            </div>

            <div className="maximus__footer-content_classes">
                <p>Our Classes</p>
                <span></span>
                <p>Fitness Classes</p>
                <p>Aerobics Classes</p>
                <p>Power Yoga</p>
                <p>Learn Machines</p>
                <p>Full-body Strength</p>
            </div>

            <div className="maximus__footer-content_hours">
                <p>Working Hours</p>
                <span></span>
                <p>Monday - Friday:</p>
                <p>7:00am - 9:00pm</p>
                <p>Saturday:</p>
                <p>7:00am - 7:00pm</p>
                <p>Sunday - Closed</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer