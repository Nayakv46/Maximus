import React from 'react';
import { Link } from 'react-router-dom';
import './homeBlogBox.css';

import { MdKeyboardArrowRight } from 'react-icons/md';

const HomeBlogBox = (props) => {
  return (
    <div className="maximus__homeblogbox">
        <div className="maximus__homeblogbox-content">
            <p>{props.date}</p>
            <h3>{props.title}</h3>
            <p>{props.info}</p>

        </div>
        <Link to="/blog">READ MORE <MdKeyboardArrowRight size={26} /></Link>
    </div>
  )
}

export default HomeBlogBox