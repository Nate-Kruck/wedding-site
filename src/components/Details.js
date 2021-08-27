import React from 'react';
import '../css/Details.css';
import Header from '../components/Header.js';
import calendar from '../images/calendar.png';
import church from '../images/church.png';
import party from '../images/party_balloons.png';

const Details = () => {
    return (
        <>
            <Header />
                <div className="event-container">
                    <div className="header-p-container">
                    <h1 className="event-header">Event Details</h1>
                    <p>Kruckenberg wedding details will be posted here</p>
                    </div>
                    <div className="grid-container">
                        <div className="calender-container">
                            <img alt="calendar" src={calendar}></img>
                            <h6>Our wedding day</h6>
                            <p>22<sup>nd</sup> July, 2022</p>
                        </div>
                        <div className="church-container">
                            <img alt="church" src={church}></img>
                            <h6>Ceremony</h6>
                            <p>3:45pm</p>
                            <a href="https://goo.gl/maps/HBpBdadDZ3JnaCZT6">Our Lady of Sorrows</a>
                        </div>
                        <div className="party-container">
                            <img alt="party" src={party}></img>
                            <h6>Reception</h6>
                            <p>Immediatly after the ceremony</p>
                            <a href="https://goo.gl/maps/sRAWuSMK3LL32PjA7">The President Hotel</a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Details;