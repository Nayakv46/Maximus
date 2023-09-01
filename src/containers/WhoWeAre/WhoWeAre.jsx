import React from 'react'
import { Link } from 'react-router-dom';
import './whoWeAre.css';

import { WhoContentBox } from '../../components';

import titleBg from '../../assets/title-bg.svg';

import whocontentImg1 from '../../assets/whotextbox1.png';
import whocontentImg2 from '../../assets/whotextbox2.png';
import whocontentImg3 from '../../assets/whotextbox3.png';

import whowomanImg from '../../assets/whowomanrunning.png';
import whowomanBg from '../../assets/whowomanbg.svg';
import whowomanTitle from '../../assets/whowomantitle.png';
import whowomanWind from '../../assets/whowomanwind.png';

import { MdKeyboardArrowRight } from 'react-icons/md';

const WhoWeAre = () => {
  return (
    <section className="maximus__who">
        <div className="maximus__who-content">
            <div className="maximus__who-contentBoxes">
                <div className="maximus__who-contentBoxes_container1" >
                    <WhoContentBox 
                      image="1"
                      title="Progression"
                      paragraph="Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
                    />

                    <WhoContentBox 
                      image="2"
                      title="Workout"
                      paragraph="With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
                    />
                </div>

                <div className="maximus__who-contentBoxes_container2">
                    <WhoContentBox 
                      image="3"
                      title="Nutritions"
                      paragraph="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
                      />
                </div>
            </div>
            
            <div className="maximus__who-content_lower">
                <div className="maximus__who-content_lower-text">
                    <p>WHO WE ARE</p>
                    <img src={titleBg} alt="title-background" />
                    <h2>Take Your Health And Body To Next Level</h2>
                    <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                    <div className="maximus__who-content_lower-text_boxes">
                        <div className="maximus__who-content_lower-text_boxes-box1">
                            <img src={whocontentImg1} alt="prof-trainers" />
                            <h3>PROFESSIONAL<br/>TRAINERS</h3>
                        </div>

                        <div className="maximus__who-content_lower-text_boxesContainer">

                            <div className="maximus__who-content_lower-text_boxes-box2">
                                <img src={whocontentImg2} alt="modern-equipments" />
                                <h3>MODERN<br/>EQUIPMENTS</h3>
                            </div>

                            <div className="maximus__who-content_lower-text_boxes-box3">
                                <img src={whocontentImg3} alt="prof-trainers" />
                                <h3>FANCY GYM<br/>MACHINES</h3>
                            </div>
                        </div>
                    </div>

                    <Link to="/classes">TAKE A TOUR <MdKeyboardArrowRight size={26} /></Link>
                </div>
                
                <div className="maximus__who-content_lower-image">
                    <img src={whowomanImg} alt="running-woman" />
                    <img src={whowomanBg} alt="woman-bg" />
                    <img src={whowomanTitle} alt="woman-title" />
                    <img src={whowomanWind} alt="woman-wind" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre