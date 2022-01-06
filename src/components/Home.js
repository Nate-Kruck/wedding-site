import React from 'react';
import Header from '../components/Header.js';
import '../css/Home.css';
import Countdown from '../components/Countdown.js';

const Home = () => {
    return (
        <>
            <Header />
                {/* <div className="home-container"> */}
                    <h1 className="home-header">We are getting Married!</h1>
                        <Countdown/>
                {/* </div> */}
        </>
    )
}

export default Home;