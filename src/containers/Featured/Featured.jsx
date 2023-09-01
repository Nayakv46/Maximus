import React from 'react'
import './featured.css';

import titleBg from '../../assets/title-bg.svg';

const Featured = () => {
  return (
    <section className="maximus__featured">
        <div className="maximus__featured-content">
            
            <div className="maximus__featured-content_text">
                <p>OUR FEATURED CLASSES</p>
                <img src={titleBg} alt="title-bg" />
                <h2>We Are Offering Best Flexible Classes</h2>
            </div>

            <div className="maximus__featured-content_classes">
                <div className="maximus__featured-content_classes-box1">
                    <div className="maximus__featured-content_classes-box1_image">

                    </div>
                    <div className="maximus__featured-content_classes-box1_text">
                        <h2>Cycling</h2>
                        <p>Wednesday: 9:00am-10:00am</p>

                    </div>
                </div>


                <div className="maximus__featured-content_classes-box2">
                    <div className="maximus__featured-content_classes-box2_image">

                    </div>
                    <div className="maximus__featured-content_classes-box2_text">
                        <h2>Karate</h2>
                        <p>Friday: 10:00am-11:00am</p>

                    </div>
                </div>

                <div className="maximus__featured-content_classes-box3">
                    <div className="maximus__featured-content_classes-box3_image">

                    </div>
                    <div className="maximus__featured-content_classes-box3_text">
                        <h2>Power</h2>
                        <p>Saturday: 9:00am-10:00am</p>

                    </div>
                </div>

                <div className="maximus__featured-content_classes-box4">
                    <div className="maximus__featured-content_classes-box4_image">

                    </div>
                    <div className="maximus__featured-content_classes-box4_text">
                        <h2>Meditation</h2>
                        <p>Friday: 1:00pm-2:00pm</p>

                    </div>
                </div>

                <div className="maximus__featured-content_classes-box5">
                    <div className="maximus__featured-content_classes-box5_image">

                    </div>
                    <div className="maximus__featured-content_classes-box5_text">
                        <h2>Martial Arts</h2>
                        <p>Sunday: 6:00pm-7:00pm</p>

                    </div>
                </div>

                <div className="maximus__featured-content_classes-box6">
                    <div className="maximus__featured-content_classes-box6_image">

                    </div>
                    <div className="maximus__featured-content_classes-box6_text">
                        <h2>Workout</h2>
                        <p>Monday: 4:00pm-5:00pm</p>

                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Featured