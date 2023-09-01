import React from 'react'

import './team.css';

import { TeamMember } from '../../components';

import titleBg from '../../assets/title-bg.svg';

const Team = () => {
  return (
    <section className="maximus__team">
      <div className="maximus__team-content">
        <div className="maximus__team-content_text">
          <p>GYM TRAINERS</p>
          <img src={titleBg} alt="title-bg" />
          <h2>Team Of Expert Coaches</h2>
          <p>Expert team of coaches helps you succeed in any goal, <br/> personalized guidance and motivation provided!</p>
        </div>

        <div className="maximus__team-content_coaches">
          <TeamMember img="1" name="John Lewis" job="Yoga Trainer" />
          <TeamMember img="2" name="Conrad Walker" job="Crossfit Trainer" />
          <TeamMember img="3" name="Ana June" job="Personal Trainer" />
        </div>
      </div>
    </section>
  )
}

export default Team