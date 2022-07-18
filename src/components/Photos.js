import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/Photos.css';
import '../css/Queries.css';
// import Ephoto from '../images/president.jpg'

const Photos = () => {
    return (
        <>
                <Header />
                    <div className="photo-header">
                        <h1>Photos</h1>
                    </div>
                <div className="photo-container">
                        {/* <p>We look forward to sharing all the photos from our honeymoon and wedding weekend. Please check back here in October 2022. Keep an eye out fot the email notification when photos are posted. <br/><b>Don't forget to use our hashtag #AboutKruckinTime and tag us!</b></p> */}
                        <Link to="/engagement-photos">
                        <img className="album-image" src='https://i.ibb.co/FJyHtpC/bw-1.jpg' alt='engagement photos'/>
                        </Link><p>Engagement Photos</p>
                        <Link to="/wedding-photos">
                        {/* <img className="album-image" src={Ephoto} alt='wedding photos'/> */}
                        </Link><p>Wedding Photos</p>
                </div>
                
        </>
    )
}

export default Photos;