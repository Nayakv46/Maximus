import React from 'react'
import './homeBlog.css';

import { HomeBlogBox } from '../../components';

import titleBg from '../../assets/title-bg.svg';

const HomeBlog = () => {
  return (
    <section className="maximus__homeblog">
        <div className="maximus__homeblog-text">
            <p>LATEST BLOG</p>
            <img src={titleBg} alt="title-bg" />
            <h3>Our Recent News</h3>
            <p>We are posting blog articles containing helpful tips <br/> as well as recent deals.</p>
        </div>

        <div className="maximus__homeblog-content">
            <HomeBlogBox 
                date="22.03.2022"
                title="Meet Fitness Ambassador Grace"
                info="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
            />
            <HomeBlogBox 
                date="13.09.2022"
                title="Getting Back Into CrossFit After Vacation"
                info="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success while doing it in group."
            />
            <HomeBlogBox 
                date="22.12.2022"
                title="Revolution with the New Year Resolution"
                info="Your New Year's resolutions were to start working out at the gym? Well, you're not the first one and with got everything that you need!"
            />
        </div>
    </section>
  )
}

export default HomeBlog