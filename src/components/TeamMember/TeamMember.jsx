import React from 'react'
import './teamMember.css';

import teamMember1 from '../../assets/teammember1.png';
import teamMember2 from '../../assets/teammember2.png';
import teamMember3 from '../../assets/teammember3.png';

import teamMemberBg from '../../assets/teammemberbg.png';

import teamMemberDescIcon from '../../assets/teammemberdescicon.png';

import { FaChevronUp, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';

// import { HiOutlineEnvelope } from 'react-icons/hi2';


const ImgHandler = (id) => {
    switch(id){
        case "1":
            return teamMember1;
        case "2":
            return teamMember2;
        case "3":
            return teamMember3;
        default:
            return;
    }
}

const TeamMember = (props) => {
  return (
    <div className="maximus__teamMember">
        <img src={ImgHandler(props.img)} alt="team-member" />
        <img src={teamMemberBg} alt="member-bg" />
        <div className="maximus__teamMember-desc">
            <FaChevronUp />
            <img src={teamMemberDescIcon} alt="desc-shape" />
            <h3>{props.name}</h3>
            <p>{props.job}</p>
            <div className="maximus__teamMember-desc_social">
                <FaFacebookF />
                <FaTwitter  />
                <FaInstagram />
                <FaEnvelope/>
            </div>
        </div>
    </div>
  )
}

export default TeamMember