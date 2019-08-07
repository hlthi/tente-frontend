import React, { Component } from 'react';
import './LogoBar.scss';
import logoIcon from '../icons/logo.svg';
import { Link } from 'react-router-dom';
import menuSvg from '../icons/menu.svg';

class LogoBar extends Component {
  render() {
    return (
      <div id="logobar-container">
        <div className="u-flex u-flexRow u-flexJustifyBetween">
          <Link to="/" className="hide-ugly-a">
            <div className="u-flexColCenter">
              <img className="logo" alt="bilgin tente logo" src={logoIcon} />
              <span>Bilgin Tente</span>
            </div>
          </Link>

          <div className="is-hidden-touch">
            <div className="u-flex u-flexJustifyEnd">
              <Link to="/" className="item hide-ugly-a semibold-font font-18">Ana Sayfa</Link>
              <Link to="/kumas/docril" className="item hide-ugly-a semibold-font font-18">Katolog/Kumaşlar</Link>
              <Link to="/iletisim" className="item hide-ugly-a semibold-font font-18">İletişim</Link>
              <Link to="/temizleme" className="item hide-ugly-a thin-font font-18">Nasıl Temizlenmeli</Link>
              <Link to="/referans" className="item hide-ugly-a thin-font font-18">Referanslar</Link>
            </div>
          </div>
          <Link className="is-hidden-desktop" to="/menu">
            <img alt="menu" className="hamburger" src={menuSvg}/>
          </Link>
        </div>
      </div>
    );
  }
}

export default LogoBar;
