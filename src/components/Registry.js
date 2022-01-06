import React from 'react';
import Header from '../components/Header.js';
import '../css/Registry.css';

const Registry = () => {
    return (
        <>
                <Header />
                <div className="registry-container">
                        <h1 className="registry-message">Registry 
                        <br/>
                        <svg width="100%" height="100%">
                            <text x="50%" y="70%" textAnchor="middle">Coming Soon</text>
                        </svg>
                        </h1>
                        <p>Check back March 2022 </p>
                </div>     
        </>
    )
}

export default Registry;