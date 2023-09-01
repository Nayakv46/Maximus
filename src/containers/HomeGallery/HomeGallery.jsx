import React from 'react'
import './homeGallery.css';

import titleBg from '../../assets/title-bg.svg';
import homeGalleryBg from '../../assets/homegallerybg.png';


const HomeGallery = () => {
  return (
    <section className="maximus__homegallery">
        <img src={homeGalleryBg} alt="train hard" />

        <div className="maximus__homegallery-text">
            <p>MAXIMUS GALLERY</p>
            <img src={titleBg} alt="title-bg" />
            <h2>Our Workplace Gallery</h2>
            <p>Our Workplace Gallery features modern office, team collaboration, and fun culture. <br/>Attracts talents and showcases company's work atmosphere.</p>
        </div>

        <div className="maximus__homegallery-photos">
            <div className="maximus__homegallery-photos_1">
            </div>

            <div className="maximus__homegallery-photos_2">
            </div>

            <div className="maximus__homegallery-photos_3">
            </div>

            <div className="maximus__homegallery-photos_4">
            </div>

            <div className="maximus__homegallery-photos_5">
            </div>
        </div>
    </section>
  )
}

export default HomeGallery