import React from 'react'
import './schedule.css';

import { ScheduleClass } from '../../components';
import { Link } from 'react-router-dom';

const Saturday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' >Monday</Link>
                <Link to='/schedule/tuesday'>Tuesday</Link>
                <Link to='/schedule/wednesday'>Wednesday</Link>
                <Link to='/schedule/thursday'>Thursday</Link>
                <Link to='/schedule/friday'>Friday</Link>
                <Link to='/schedule/saturday' className="active">Saturday</Link>
                <Link to='/schedule/sunday'>Sunday</Link>
            </div>

            <div className="maximus__schedule-classes">
                <ScheduleClass 
                name="Power Lifting"
                time="9:00am - 10:00am"
                trainer="David Laid" />
                
                <ScheduleClass 
                name="Boxing"
                time="10:00am - 11:00am"
                trainer="Tyson Fury" />
                
                <ScheduleClass 
                name="Yoga"
                time="2:00pm - 3:00pm"
                trainer="Hannah Tails" />
                
            </div>
        </section>
    </>
  )
}

export default Saturday