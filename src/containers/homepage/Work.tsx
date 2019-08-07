import React, { Component } from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import leafIcon from '../icons/leaf.svg';

class Work extends Component {
  render() {
    return (
      <div id="work-container">
        <div className="columns">
          <div className="column is-one-fifth">
            <hr className="line" />
          </div>
          <div className="column">
            <span className="font-15 thin-font font-primary-color">NELER YAPTIĞIMIZI KEŞFEDİN</span>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column">
            <Link to="/referans" className="image-grid-name">
              <div className="image-grid title-1" />
              <p className="title">Ev Tente</p>
            </Link>
          </div>
          <div className="column">
            <Link to="/referans"  className="image-grid-name">
              <div className="image-grid title-2" />
              <p className="title">İşyeri Tente</p>
            </Link>
          </div>
          <div className="column">
            <Link to="/referans" className="image-grid-name">
              <div className="image-grid title-3" />
              <p className="title">Kamyonet Tente</p>
            </Link>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column">
            <Link to="/referans" className="image-grid-name">
              <div className="image-grid title-4" />
              <p className="title">Restaurant Tente</p>
            </Link>
          </div>
          <div className="column">
            <Link to="/referans"className="image-grid-name">
              <div className="image-grid title-5" />
              <p className="title">Plaj Şemsiye</p>
            </Link>
          </div>
        </div>

        <div className="u-flexColCenter call">
          <div className="u-flex u-flexRow u-flexJustifyStart">
            <img alt="branda-tente sorunları" className="leaf-icon" src={leafIcon} />
            <div className="u-paddingLx">
              <p className="primary-color font-22 semibold-font">Bir sorun mu var ? Yada yeni bir proje mi ?</p>
              <p className="font-22">Her daim hizmetinizdeyiz.</p>
            </div>
          </div>

          <Link to="/iletisim" className="button is-large u-marginTl u-paddingVx">
            <span className="primary-color button-text semibold-font">Sizi Arayalım mı ?</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
