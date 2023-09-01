import React from 'react';
import './testimonials.css';

import titleBg from '../../assets/title-bg.svg';

import testimonialImg from '../../assets/testimonialimg.jpg';

import testimonalQuotes from '../../assets/testimonialquotes.png';
import testimonialBike from '../../assets/testimonialbike.svg';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const Testimonials = () => {
  return (
    <section className="maximus__testimonials">
        <div className="maximus__testimonials-text">
            <p>TESTIMONIALS</p>
            <img src={titleBg} alt="title-bg" />
        </div>

        <div className="maximus__testimonials-container">
            <div className="maximus__testimonials-container_content">
                <img src={testimonialImg} alt="gym-member" />

                <div className="maximus__testimonials-container_content-testimony">
                    <img src={testimonalQuotes} alt="quotes" />
                    <p>“I've been a member of Maximus for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”</p>
                    <h3>Lisa Stateham</h3>
                    <p>CEO of Universal Pictures</p>
                    <img src={testimonialBike} alt="bike" />
                </div>

                <div className="maximus__testimonials-container_content-buttons">
                    <button type="button"><BiChevronLeft size={28} /></button>
                    <button type="button"><BiChevronRight size={28} /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials