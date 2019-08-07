import React, { Component } from 'react';
import './ShowMe.scss';
import leafIcon from '../icons/leaf.svg';
import { Link } from 'react-router-dom';

class ShowMe extends Component {
  render() {
    return (
      <div id="showme-container">
        <div className="u-flexColCenter call">
          <div className="u-flex u-flexRow u-flexJustifyStart">
            <img alt="ithal kumaş ikon" className="leaf-icon" src={leafIcon} />
            <div className="u-paddingLx">
              <p className="primary-color font-22 semibold-font">İthal kumaş, üstün kalite, maksimum müşteri memnuniyeti</p>
              <Link to="/kumas/docril" className="button u-paddingVm is-medium is-light">
                <p className="font-18">Kumaşlarımızı görün</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="light-image">
          <div className="inside">
            <Link to="/referans">
              <div className="per1 primary-color">İşlerimizden esinlenin.</div>
            </Link>

            <div className="per2">
              <Link to="/kumas/docril" className="per2">
                Kumaşlarımızı görün
              </Link>
            </div>
          </div>
        </div>

        <div className="u-textCenter contact-us">
          <Link to="/iletisim" className="button u-paddingVm primary-color font-22 bold-font is-medium is-light">
            <div>Bizimle iletişime geçin</div>
            <div className="arr-right">→</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowMe;
