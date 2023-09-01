import React from 'react'
import './schedule.css';

import { Link } from 'react-router-dom';
import { ScheduleClass } from '../../components';

const Monday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' className="active">Monday</Link>
                <Link to='/schedule/tuesday'>Tuesday</Link>
                <Link to='/schedule/wednesday'>Wednesday</Link>
                <Link to='/schedule/thursday'>Thursday</Link>
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
                time="10:00am - 11:00am"
                trainer="John Weights" />
                
                <ScheduleClass 
                name="Running"
                time="4:00pm - 5:00pm"
                trainer="Jonifor Jonas" />
                
                <ScheduleClass 
                name="Cycling"
                time="6:00pm - 7:00pm"
                trainer="Robert Louis" />
                
            </div>
        </section>
    </>
  )
}

export default Monday