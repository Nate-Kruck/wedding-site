import React from 'react';
import Album from '../album/photoAlbum.js';
import Header from '../components/Header.js';
import '../css/Photos.css';
import '../css/Queries.css';
import Item from '../hooks/photoItem.js';

const Photos = () => {
    return (
        <>
                <Header />
                    <div className="photo-header">
                        <h1>Photos</h1>
                    </div>
                <div className="photo-container">
                        {/* <p>We look forward to sharing all the photos from our honeymoon and wedding weekend. Please check back here in October 2022. Keep an eye out fot the email notification when photos are posted. <br/><b>Don't forget to use our hashtag #AboutKruckinTime and tag us!</b></p> */}
                        {Album.map((item, i) => <Item key={i} item={item} />)}
                </div>
                
        </>
    )
}

export default Photos;