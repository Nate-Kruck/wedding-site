import React from 'react';
import Header from '../components/Header.js';
import '../css/Photos.css';

const Photos = () => {
    return (
        <>
                <Header />
                <div className="photo-container">
                    <div className="photo-header">
                        <h1>Photos</h1>
                        <p>We look forward to sharing all the photos from our honeymoon and wedding weekend. Please check back here in October 2022. Keep an eye out fot the email notification when photos are posted. <br/><b>Don't forget to use our hashtag #AboutKruckinTime and tag us!</b></p>
                    </div>
                </div>
                
        </>
    )
}

export default Photos;