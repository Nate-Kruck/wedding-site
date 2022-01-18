import React from 'react';
import Header from '../components/Header.js';
import '../css/Home.css';
import Countdown from '../components/Countdown.js';

const Home = () => {
    return (
        <>
            <Header />
                <div className="home-container">
                    <div className='home-grid'>
                    <p className='c-soon-header'>7 | 22 | 22</p>
                    <h1 className="home-header">
                        Willow 
                        <br/>
                        & Nathan
                        </h1>
                        <Countdown/>
                    </div>
                </div>
        </>
    )
}

export default Home;