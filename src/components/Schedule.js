import React from 'react';
import Header from '../components/Header.js';
import '../css/Schedule.css';
import '../css/Queries.css';

const Schedule = () => {
    return (
        <>
                <Header />
                <div className="schedule-container">
                    <div className="schedule-header">
                        <h1 className='schedule-h1'>Schedule</h1>
                        <p>Here's what to expect during our wedding weekend. There will also be a printout of this schedule available in your hotel rooms. We can't wait to celebrate with you!</p>
                    </div>
                </div>
                
        </>
    )
}

export default Schedule;