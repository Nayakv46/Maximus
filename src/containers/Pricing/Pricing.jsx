import React from 'react';
import './pricing.css';
import titleBg from '../../assets/title-bg.svg';
import pricingIconBg from '../../assets/pricingiconbg.png';
import pricingIconBg2 from '../../assets/pricingiconbg2.png';
import { PricingPlan } from '../../components';

const Pricing = () => {
  return (
    <section className="maximus__pricing">
        <img src={pricingIconBg} alt="no-days-off" />
        <div className="maximus__pricing-content">
            <div className="maximus__pricing-content_text">
                <p>PRICING CHART</p>
                <img src={titleBg} alt="title-bg" />
                <h2>Exclusive Pricing Plan</h2>
                <p>Maximus provides a wide variety of fitness plans <br/>to fit everyones demand.</p>
            </div>

            <div className="maximus__pricing-content_plans">
                <PricingPlan img="1" level="Beginner" price="39" />
                <PricingPlan img="2" level="Normal" price="65" />
                <PricingPlan img="3" level="Advanced" price="100" />
            </div>
        </div>
        <img src={pricingIconBg2} alt="weights" />
    </section>
  )
}

export default Pricing