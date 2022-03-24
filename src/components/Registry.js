import React from 'react';
import Header from '../components/Header.js';
import '../css/Registry.css';
import '../css/Queries.css';
import crateAndBarrel from '../images/crate-barrel-logo.png';
import bedBathBeyondImage from '../images/bed-bath-beyond.png';
import honeyFundImage from '../images/honey-fund.png';

class Registry extends React.Component {

crateAndBarrelLink() {
  window.open("https://www.crateandbarrel.com/gift-registry/willow-garcia-and-nathan-kruckenberg/r6483245")
}

bedBathBeyond() {
  window.open("https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551306537?selectedRLVFilters=_recommended")
}

honeyFund() {
  window.open("https://www.honeyfund.com/wedding/garcia-kruckenberg-07-22-2022")
}

  render() {
    return (
      <div>
        <Header />
          <h1 className='registry-header'>Registry Links</h1>
          <div className="registry-container">
            <div className='registry-links'>
             <img src={crateAndBarrel}
                  className="the-barrel"
                  alt="crate barrel"
                  onClick={this.crateAndBarrelLink}>
            </img>
            <img src={bedBathBeyondImage}
                alt="bed beyond"
                onClick={this.bedBathBeyond}>
            </img>
            <img src={honeyFundImage}
                alt="bed beyond"
                onClick={this.honeyFund}>
            </img>
          </div>
        </div> 
      </div>    
    )
  }
}

export default Registry;