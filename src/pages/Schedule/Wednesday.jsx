import React from 'react'
import './schedule.css';

import { Link } from 'react-router-dom';
import { ScheduleClass } from '../../components';

const Wednesday = () => {
  return (
    <>
        <section className="maximus__schedule">
            <div className="maximus__schedule-days">
                <Link to='/schedule/monday' >Monday</Link>
                <Link to='/schedule/tuesday'>Tuesday</Link>
                <Link to='/schedule/wednesday' className="active">Wednesday</Link>
                <Link to='/schedule/thursday'>Thursday</Link>
                <Link to='/schedule/friday'>Friday</Link>
                <Link to='/schedule/saturday'>Saturday</Link>
                <Link to='/schedule/sunday'>Sunday</Link>
            </div>

            <div className="maximus__schedule-classes">
                <ScheduleClass 
                name="Cycling"
                time="9:00am - 10:00am"
                trainer="Mario Vreco" />
                
                <ScheduleClass 
                name="Body Building"
                time="10:00am - 11:00am"
                trainer="John Weights" />
                
                <ScheduleClass 
                name="Fitness"
                time="4:00pm - 5:00pm"
                trainer="Tom Rizzly" />
                
                <ScheduleClass 
                name="Running"
                time="9:00pm - 10:00pm"
                trainer="Michael Jonson" />
                
            </div>
        </section>
    </>
  )
}

export default Wednesday