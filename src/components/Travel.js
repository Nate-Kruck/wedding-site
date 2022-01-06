import React from 'react';
import Header from '../components/Header.js';
import '../css/Travel.css';
import luggage from '../images/luggage.png';
import plane from '../images/plane-3.svg';
import '../css/Queries.css';

class Travel extends React.Component {

    // click events for hotel book now buttons
    hiltonClick() {
        window.open("https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=MKCCUQQ&arrivalDate=2022-07-20&departureDate=2022-07-24&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink")
    }

    phillipClick() {
        window.open("https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=MKCCUQQ&arrivalDate=2022-07-20&departureDate=2022-07-24&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink")
    }

    museumClick() {
        window.open("https://book.passkey.com/event/50221663/owner/49860193/home")
    }


    render() {
    return (
        <>
                <Header />
                <div className="travel-container">
                    <div className="travel-header">
                        <h1>Travel <span className="small-character">& </span>Accommodations</h1>
                        <p>For your convenience, we have three wonderful hotels to choose from. Each hotel has a room block under "Garcia-Kruckenberg Wedding" and include discounted rates. <br/> <strong>Click on links below to book your discounted room.</strong> </p>
                    </div>

                    {/* Airport Info */}
                    <div className="airport">
                        <img alt="airplane" src={plane}/>
                        <h2>MCI</h2>
                        <p>Airport</p>
                        <p>Twenty two minute drive to downtown Kansas City</p>
                    </div>

                    {/* Hilton Hotel info */}
                    <div className="hotel-1">
                        <img alt="luggage" src={luggage}/>
                        <h2>Hilton President</h2>
                            <p>Hotel</p>
                            <p>1329 Baltimore Avenue <br/> Kansas City, MO 64105</p>
                            <p>(816) 221-9490</p>
                            <p>Location of wedding reception.</p>
                        <div className="btn-wrapper">
                            <button className="hotel-button" alt="hilton hotel" 
                            onClick={this.hiltonClick}>Book Room</button>
                        </div>
                    </div>
                
                    {/* Phillips by Hilton info */}
                    <div className="hotel-2">
                        <img alt="luggage" src={luggage}/>
                        <h2>Hotel Phillips</h2>
                            <p>Hotel</p>
                            <p>106 W 12th Street <br/> Kansas City, MO 64105</p>
                            <p>(816) 221-7000</p>
                            <p>Three minute drive from the reception</p>
                        <div className="btn-wrapper">
                            <button className="hotel-button" alt="hotel phillips" 
                            onClick={this.phillipClick}>Book Room</button> 
                        </div>
                    </div>

                {/* 21c Museum Hotel info */}
                    <div className="hotel-3">
                        <img alt="luggage" src={luggage}/>
                        <h2>21C Museum Hotel</h2>
                            <p>Hotel</p>
                            <p>219 W 9th Street <br/> Kansas City, MO 64105</p>
                            <p>(816) 443-4200</p>
                            <p>Three minute drive from the reception</p>
                        <div className="btn-wrapper">
                            <button className="hotel-button" alt="21c-hotel" 
                            onClick={this.museumClick}>Book Room</button>
                        </div>
                    </div>
                </div>
                
        </>
    )
}
}

export default Travel;