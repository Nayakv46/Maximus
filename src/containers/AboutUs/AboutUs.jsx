import React from 'react';
import './aboutUs.css';

import titleBg from '../../assets/title-bg.svg';

import { MdKeyboardArrowRight } from 'react-icons/md';

import whowomanImg from '../../assets/whowomanrunning.png';
import whowomanBg from '../../assets/whowomanbg.svg';
import whowomanTitle from '../../assets/whowomantitle.png';
import whowomanWind from '../../assets/whowomanwind.png';

import abouticon1 from '../../assets/abouticon1.png';
import abouticon2 from '../../assets/abouticon2.png';

import aboutusimg1 from '../../assets/aboutusimg1.jpg';
import aboutusimg2 from '../../assets/aboutusimg2.jpg';


const AboutUs = () => {
  return (
    <section className="maximus__about">
        <div className="maximus__about-content">
            <div className="maximus__about-content_top">
                <div className="maximus__about-content_top-text">
                    <p>WHO WE ARE</p>

                    <img src={titleBg} alt="title-background" />

                    <h2>We Will Give You Strength and Health</h2>

                    <p>At Maximus, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>

                    <a href="/">CONTACT US <MdKeyboardArrowRight size={26} /></a>
                </div>

                <div className="maximus__about-content_top-image">
                    <img src={whowomanImg} alt="running-woman" />
                    <img src={whowomanBg} alt="woman-bg" />
                    <img src={whowomanTitle} alt="woman-title" />
                    <img src={whowomanWind} alt="woman-wind" />
                </div>
            </div>

            <div className="maximus__about-content_bottom">
                <div className="maximus__about-content_bottom-box1">
                    <img src={abouticon1} alt="icon" />
                    <h2>Our History</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat expedita error veniam quaerat dicta doloremque esse consequuntur.</p>
                </div>

                <div className="maximus__about-content_bottom-box2">
                    <img src={aboutusimg1} alt="about-img" />
                </div>

                <div className="maximus__about-content_bottom-box3">
                    <img src={aboutusimg2} alt="about-img" />
                </div>

                <div className="maximus__about-content_bottom-box4">
                    <img src={abouticon2} alt="icon" />
                    <h2>Our History</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat expedita error veniam quaerat dicta doloremque esse consequuntur.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs