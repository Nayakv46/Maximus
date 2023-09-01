import React from 'react'
import './class.css';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegClock } from 'react-icons/fa6';

import { MdKeyboardArrowRight } from 'react-icons/md';

const Class = (props) => {
  return (
    <div className={`classBox ${props.name.replace(' ','').toLowerCase()}-bg`}>
        <span></span>
        <div className="classBox_content">
            <p>{props.name}</p>
            <span></span>
            <div className="classBox_content-info">
                <p><FaRegUser size={18} />{props.trainer}</p>
                <p><FaRegClock size={18}/>{props.time}</p>
            </div>
            <Link to="/contact">JOIN NOW<MdKeyboardArrowRight size={26}/></Link>
        </div>
    </div>
  )
}

export default Class