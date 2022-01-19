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
                        <p>For your planning needs, here is a glimpse of our wedding weekend timeline.</p>
                    </div>
                </div>
                
        </>
    )
}

export default Schedule;