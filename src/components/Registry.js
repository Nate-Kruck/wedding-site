import React from 'react';
import Header from '../components/Header.js';
import '../css/Registry.css';
import '../css/Queries.css';
import crateAndBarrel from '../images/crate-barrel-logo.png';
import bedBathBeyondImage from '../images/bed-bath-beyond.png';
import target from '../images/target.jpeg';

class Registry extends React.Component {

crateAndBarrelLink() {
  window.open("https://www.crateandbarrel.com/gift-registry/willow-garcia-and-nathan-kruckenberg/r6483245");
}

bedBathBeyond() {
  window.open("https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551306537?selectedRLVFilters=_recommended");
}

targetLink() {
  window.open("https://www.target.com/gift-registry/gift-giver?registryId=6771ae70-c5c7-11ec-96a8-8bd059f9f128&type=WEDDING");
}

  render() {
    return (
      <>
        <Header />
          <h1 className='registry-header'>Registry Links</h1>
          <div className="registry-container">
            <div className="addthis_tipjar_inline">
            </div>
            <div className='registry-links'>
              <img src={crateAndBarrel} className="the-barrel" alt="crate barrel" onClick={this.crateAndBarrelLink} />
              <img src={bedBathBeyondImage} alt="bed beyond" onClick={this.bedBathBeyond} />
            </div>
          </div>
      </>
    )
  }
}

export default Registry;
