import React from 'react';
import Header from '../components/Header.js';
import '../css/Home.css';

const Home = () => {
    return (
        <>
            <Header />
                <div className="home-container">
                    <h1 className="home-header">Home</h1>
                    <p>This is the home page</p>
                </div>
        </>
    )
}

export default Home;