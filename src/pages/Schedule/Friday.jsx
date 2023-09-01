import React from 'react'
import './schedule.css';

import { ScheduleClass } from '../../components';

import { Link } from 'react-router-dom';

const Friday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' >Monday</Link>
                <Link to='/schedule/tuesday'>Tuesday</Link>
                <Link to='/schedule/wednesday'>Wednesday</Link>
                <Link to='/schedule/thursday'>Thursday</Link>
                <Link to='/schedule/friday' className="active">Friday</Link>
                <Link to='/schedule/saturday'>Saturday</Link>
                <Link to='/schedule/sunday'>Sunday</Link>
            </div>

            <div className="maximus__schedule-classes">
                <ScheduleClass 
                name="Crossfit"
                time="7:00am - 8:00am"
                trainer="Conrad Walker" />
                
                <ScheduleClass 
                name="Karate"
                time="8:00am - 9:00am"
                trainer="John Jones" />
                
                <ScheduleClass 
                name="Meditation"
                time="5:00pm - 6:00pm"
                trainer="Lara Croft" />
                
                <ScheduleClass 
                name="Workot"
                time="6:00pm - 7:00pm"
                trainer="Larry Wheels" />
                
            </div>
        </section>
    </>
  )
}

export default Friday