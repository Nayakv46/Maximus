import React from 'react'
import { Link } from 'react-router-dom';
import './hero.css';

import { FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

import titleBg from '../../assets/title-bg.svg';

const Hero = () => {
  return (
    <section className="maximus__hero">
        <div className="maximus__hero-content">
          <p>FIND YOUR ENERGY</p>
          <img src={titleBg} alt="title-bg" />
          <h1>MAKE YOUR BODY <br />
          <span>FIT & PERFECT</span></h1>
          <Link to="/classes">OUR CLASSES <MdKeyboardArrowRight size={26} /></Link>
        </div>
        <div className="maximus__hero-share">
          <p>SHARE</p>
          <p></p>
          <div className="maximus__hero-share_icons">
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
    </section>
  )
}

export default Hero