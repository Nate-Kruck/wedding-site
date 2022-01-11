import React from 'react';
import Album from '../album/photoAlbum.js';
import Header from '../components/Header.js';
import '../css/Photos.css';
import '../css/Queries.css';
import Item from '../hooks/photoItem.js';

const Ephotos = () => {
    return (
        <>
                <Header />
                    <div className="photo-header">
                        <h1>Engagement Photos</h1>
                    </div>
                <div className="e-photo-container">
                    {Album.map((item, i) => <Item key={i} item={item} />)}
                </div>
                
        </>
    )
}

export default Ephotos;