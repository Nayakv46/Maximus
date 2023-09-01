import React from 'react';
import './logoBar.css';

import logoImg1 from '../../assets/logoImg1.png';
import logoImg2 from '../../assets/logoImg2.png';
import logoImg3 from '../../assets/logoImg3.png';
import logoImg4 from '../../assets/logoImg4.png';
import logoImg5 from '../../assets/logoImg5.png';

const LogoBar = () => {
  return (
    <div className="maximus__logobar">
        <img src={logoImg1} alt="logo" />
        <img src={logoImg2} alt="logo" />
        <img src={logoImg3} alt="logo" />
        <img src={logoImg4} alt="logo" />
        <img src={logoImg5} alt="logo" />
    </div>
  )
}

export default LogoBar