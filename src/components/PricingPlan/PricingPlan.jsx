import React from 'react'
import { Link } from 'react-router-dom';
import './pricingPlan.css';

import planimg1 from '../../assets/pricingplanimg1.jfif';
import planimg2 from '../../assets/pricingplanimg2.jfif';
import planimg3 from '../../assets/pricingplanimg3.jfif';

import { MdKeyboardArrowRight } from 'react-icons/md';

const imgHandler = (id) => {
    switch (id) {
        case "1":
            return planimg1;
        case "2":
            return planimg2;
        case "3":
            return planimg3;
        default: 
            return;
    }
}

const PricingPlan = (props) => {
  return (
    <div className="maximus__pricingplan">
        <div className="maximus__pricingplan_image">
            <img src={imgHandler(props.img)} alt="plan-top" />
            <h3>{props.level}</h3>
        </div>

        <div className="maximus__pricingplan_content">
            <p><span>$</span><span className="maximus__pricingplan_content-price">{props.price}</span><span>p/m</span></p>
            <div className="maximus__pricingplan_content-classes">
                <p>Free Hand</p>
                <p>Gym Fitness</p>
                <p>Weight Loss</p>
                <p>Personal Trainer</p>
                <p>Cycling</p>
            </div>

            <Link to='/contact'>PURCHASE NOW <MdKeyboardArrowRight size={26} /></Link>

        </div>
    </div>
  )
}

export default PricingPlan