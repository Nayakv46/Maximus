import React from 'react'
import './schedule.css';

import { ScheduleClass } from '../../components';
import { Link } from 'react-router-dom';

const Tuesday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' >Monday</Link>
                <Link to='/schedule/tuesday' className="active">Tuesday</Link>
                <Link to='/schedule/wednesday'>Wednesday</Link>
                <Link to='/schedule/thursday'>Thursday</Link>
                <Link to='/schedule/friday'>Friday</Link>
                <Link to='/schedule/saturday'>Saturday</Link>
                <Link to='/schedule/sunday'>Sunday</Link>
            </div>

            <div className="maximus__schedule-classes">
                <ScheduleClass 
                name="Boxing"
                time="8:00am - 9:00am"
                trainer="Mike Tyson" />
                
                <ScheduleClass 
                name="Yoga"
                time="12:00am - 1:00pm"
                trainer="Mila Jenkins" />
                
                <ScheduleClass 
                name="Crossfit"
                time="8:00pm - 9:00pm"
                trainer="Conrad Walker" />
                
            </div>
        </section>
    </>
  )
}

export default Tuesday