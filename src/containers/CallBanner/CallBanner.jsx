import React from 'react';
import { Link } from 'react-router-dom';
import './callBanner.css';

import { MdKeyboardArrowRight } from 'react-icons/md';

const CallBanner = () => {
  return (
    <section className="maximus__callbanner">
        <div className="maximus__callbanner-content">
            <h2>Need a Fitness Trainer?</h2>
            <h3><span>Call:</span> +48 123-456-789</h3>
            <Link to='/contact'>PURCHASE NOW<MdKeyboardArrowRight size={26} /></Link>
        </div>
    </section>
  )
}

export default CallBanner