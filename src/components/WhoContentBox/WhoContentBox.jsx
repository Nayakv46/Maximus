import React from 'react';
import './whoContentBox.css';

import whoContentImg1 from '../../assets/whocontentimg1.png';
import whoContentImg2 from '../../assets/whocontentimg2.png';
import whoContentImg3 from '../../assets/whocontentimg3.png';

const ImageHandler = (id) => {
    switch(id){
        case "1":
            return whoContentImg1;
        case "2":
            return whoContentImg2;
        case "3":
            return whoContentImg3;
        default:
            return;
    }
}
 
const WhoContentBox = (props) => {
  return (
    <div className="whoContentBox">
        <img src={ImageHandler(props.image)} alt="content-img" />
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default WhoContentBox