import React from 'react'
import { Link } from 'react-router-dom';
import './whyChooseUs.css';

import chooseUsImg from '../../assets/whyusimg.png';
import titleBg from '../../assets/title-bg.svg';

import { BsFillPlayFill } from 'react-icons/bs';

import { MdKeyboardArrowRight } from 'react-icons/md';

import whyusIcon1 from '../../assets/whyusicon1.png';
import whyusIcon2 from '../../assets/whyusicon2.png';
import whyusIcon3 from '../../assets/whyusicon3.png';
import whyusIcon4 from '../../assets/whyusicon4.png';

const WhyChooseUs = () => {
  return (
    <section className="maximus__chooseus">
        <div className="maximus__chooseus-content">
            <div className="maximus__chooseus-content_image">
                <img src={chooseUsImg} alt="choose-us" />
                <span><BsFillPlayFill /></span>
            </div>

            <div className="maximus__chooseus-content_text">
                <p>WHY CHOOSE US</p>
                <img src={titleBg} alt="title-bg" />
                <h2>We Can Give A Shape Of Your Body Here!</h2>
                <p>At <span>Maximus</span>, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                <div className="maximus__chooseus-content_text-advantages">
                    <div className="maximus__chooseus-content_text-advantages_box1">
                        <img src={whyusIcon1} alt="why-icon" />
                        <p>Free Fitness Training</p>
                    </div>

                    <div className="maximus__chooseus-content_text-advantages_box2">
                        <img src={whyusIcon2} alt="why-icon" />
                        <p>Modern Gym Equipments</p>
                    </div>

                    <div className="maximus__chooseus-content_text-advantages_box3">
                        <img src={whyusIcon3} alt="why-icon" />
                        <p>Gym Bag Equipments</p>
                    </div>

                    <div className="maximus__chooseus-content_text-advantages_box4">
                        <img src={whyusIcon4} alt="why-icon" />
                        <p>Fresh Bottle Water</p>
                    </div>
                </div>
                <Link to="/classes">OUR CLASSES <MdKeyboardArrowRight size={26}/></Link>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs