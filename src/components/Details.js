import React from 'react';
import '../css/Details.css';
import Header from '../components/Header.js';

const Details = () => {
    return (
        <>
            <Header />
                <div className="event-container">
                    <h1 className="event-header">Event Details</h1>
                    <p>Kruckenberg wedding details will be posted here</p>
                </div>
        </>
    )
}

export default Details;