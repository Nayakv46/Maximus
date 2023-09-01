import React from 'react'
import './schedule.css';

import { ScheduleClass } from '../../components';

import { Link } from 'react-router-dom';

const Thursday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' >Monday</Link>
                <Link to='/schedule/tuesday'>Tuesday</Link>
                <Link to='/schedule/wednesday'>Wednesday</Link>
                <Link to='/schedule/thursday' className="active">Thursday</Link>
                <Link to='/schedule/friday'>Friday</Link>
                <Link to='/schedule/saturday'>Saturday</Link>
                <Link to='/schedule/sunday'>Sunday</Link>
            </div>

            <div className="maximus__schedule-classes">
                <ScheduleClass 
                name="Fitness"
                time="9:00am - 10:00am"
                trainer="David Vila" />
                
                <ScheduleClass 
                name="Body Building"
                time="1:00pm - 2:00pm"
                trainer="John Weights" />
                
                <ScheduleClass 
                name="Running"
                time="9:00pm - 10:00pm"
                trainer="Jonifor Jonas" />
                
            </div>
        </section>
    </>
  )
}

export default Thursday