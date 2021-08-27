import React from 'react';
import Header from '../components/Header.js';
import '../css/Accommodations.css';

const Accommodations = () => {
    return (
        <>
                <Header />
                <div className="acc-container">
                    <h1 className="acc-header">Accommodations</h1>
                    <p>Accommodation details will be posted here</p>
                </div>
        </>
    )
}

export default Accommodations;