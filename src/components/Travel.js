import React from 'react';
import Header from '../components/Header.js';
import '../css/Travel.css';

const Travel = () => {
    return (
        <>
                <Header />
                <div className="travel-container">
                    <h1 className="travel-header">Travel</h1>
                    <p>Travel details will be posted here</p>
                </div>
        </>
    )
}

export default Travel;