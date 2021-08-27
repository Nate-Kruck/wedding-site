import React from 'react';
import { Link } from 'react-router-dom';
import '../Details.css';

const Details = () => {
    return (
        <>
            <div>
                <h1>Event Details</h1>
                <p>Kruckenberg wedding details will be posted here</p>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Details;