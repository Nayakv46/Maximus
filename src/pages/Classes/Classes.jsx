import { React, useState } from 'react';
import './classes.css';

import { PageBanner } from '../../containers';
import { Class } from '../../components';

const Classes = () => {
    const [toggleView, setToggleView] = useState(false);
  return (
    <>
    <PageBanner page="Classes" />
    <section className="maximus__classes">
        <div className="maximus__classes-content">

            <Class name="Cycling"
                trainer="John McQueen"
                time="Wed: 9:00 am" />

            <Class name="Meditation"
                trainer="Lara Croft"
                time="Fri: 1:00 pm" />

            <Class name="Boxing"
                trainer="Connor McGregor"
                time="Tue: 4:00 pm" />

            <Class name="Karate"
                trainer="David Rich"
                time="Sat: 9:00 am" />

            <Class name="Power Lifting"
                trainer="Larry Wheels"
                time="Mon: 8:00 pm" />

            <Class name="Workout"
                trainer="Shawn Ray"
                time="Sun: 10:00 am" />

            <Class name="Crossfit"
                trainer="Conrad Walker"
                time="Wed: 9:00 pm" />

            <Class name="Running"
                trainer="Zinia Zessy"
                time="Thu: 12:00am" />

            <Class name="Body Building"
                trainer="Chris Bumstead"
                time="Mon: 8:00 pm" />    

            {toggleView 
            ? (<><Class name="MMA"
                trainer="Becky Lynch"
                time="Fri: 6:00 am" />
            
            <Class name="Yoga"
                trainer="Marta Mich"
                time="Wed: 8:00am" />
            
            <Class name="Fitness"
                trainer="Mia Malkova"
                time="Sat: 5:00 pm" />
                </>)
            : <></> }
        </div>

        <button type="button" onClick={() => setToggleView(!toggleView)}>
            Show
            {toggleView 
            ? ` Less`
            : ` More`}
        </button>
    </section>
    </>
  )
}

export default Classes