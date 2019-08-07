import React, { Component } from 'react';
import './First.scss';
import leafIcon from '../icons/leaf.svg';
import { Link } from 'react-router-dom';

class First extends Component {
  render() {
    return (
      <div id="first-container">
        <div>
          <div className="columns">
            <div className="column" />
            <div className="column is-four-fifths-desktop is-four-fifths-tablet ">
              <div className="pna">
                <b>Bilgin Tente</b>, olarak kaliteli ürünleri profesyonelliğimizle birleştirerek sizi güneşten, yağmurdan ve
                rüzgardan koruyoruz. Evinizin balkonuna, aracınıza, çay bahçenize, restaurantanıza, işletmenize , kumsala,
                istediğiniz her yere tente, şemsiye ve branda kurabiliyoruz.
              </div>
            </div>
            <div className="column" />
          </div>
        </div>
      </div>
    );
  }
}

export default First;
