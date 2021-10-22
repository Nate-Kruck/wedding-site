import React from 'react';
import Header from '../components/Header.js';
import '../css/Home.css';
import Timer from '../components/Countdown.js';

const Home = () => {
    return (
        <>
            <Header />
                <div className="home-container">
                    <h1 className="home-header">We are getting Married!</h1>
                        <div className="countdown">
                            <Timer/>
                        </div>
                </div>
        </>
    )
}

export default Home;