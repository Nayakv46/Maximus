import React from 'react';
import './scheduleClass.css';

const ScheduleClass = (props) => {
  return (
    <div className="schedule_classBox">
        <div className="schedule_classBox-name">
            <p>Class Name</p>
            <h3>{props.name}</h3>
        </div>

        <div className="schedule_classBox-time">
            <p>Time</p>
            <h3>{props.time}</h3>
        </div>

        <div className="schedule_classBox-trainer">
            <p>Trainer</p>
            <h3>{props.trainer}</h3>
        </div>

        <div className="schedule_classBox-button">
            <button type="button">
                Join Now
            </button>
        </div>
    </div>
  )
}

export default ScheduleClass