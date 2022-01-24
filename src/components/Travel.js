import React from 'react';
import Header from '../components/Header.js';
import '../css/Travel.css';
import luggage from '../images/luggage.png';
import plane from '../images/plane-3.svg';
import '../css/Queries.css';

class Travel extends React.Component {

    // click events for hotel book now buttons
    // Need Hilton link - the only link I am currently missing
    hiltonClick() {
        window.open("https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.hilton.com%2Fen%2Fbook%2Freservation%2Fdeeplink%2F%3Fctyhocn%3DMCIPRHF%26groupCode%3DGKW22%26arrivaldate%3D2022-07-21%26departuredate%3D2022-07-24%26cid%3DOM%2CWW%2CHILTONLINK%2CEN%2CDirectLink%26fromId%3DHILTONLINKDIRECT&data=04%7C01%7Ckeyli.kamin%40hilton.com%7C8df14026ce174b177b5508d9d5362626%7C660292d2cfd54a3db7a7e8f7ee458a0a%7C0%7C0%7C637775250847709548%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=TBba9%2FKvK%2BOZPx0o8mgRnIxPX6f4A3cIYiw7m2hR1fg%3D&reserved=0")
    }

    phillipClick() {
        window.open("https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=MKCCUQQ&groupCode=GKK&arrivaldate=2022-07-20&departuredate=2022-07-24&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT")
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
                        <h1 className='big-header'>Travel <span className="small-character">& </span>Accommodations</h1>
                        <p>Each hotel has a room block under "Garcia-Kruckenberg Wedding." <br/> Please note, room blocks are limited and are first come first serve.  <br/> <strong>Click on links below to book your discounted room.</strong> </p>
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