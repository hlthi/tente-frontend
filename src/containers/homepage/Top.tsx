import React, { Component } from 'react';
import './Top.scss';
import placeHolderIcon from '../icons/placeholder.svg';
import { getDeviceBasedRouteLink } from '../../helper';

interface IProps {}
class Top extends Component<IProps> {
  storeLocation: [string, string];

  constructor(props: IProps) {
    super(props);
    this.storeLocation = ['41.4328117', '31.7508171'];
  }

  render() {
    return (
      <div id="top-container">
        <div className="columns">
          <div className="column">
            <a className="hide-ugly-a" href="tel:+905437856100">
              <div className="part u-flexRowCenter">
                <i className="icon icon-phone" />
                543 785 61 00
              </div>
            </a>
          </div>
          <div className="column is-hidden-mobile">
            <div className="part u-flexRowCenter">
              <i className="icon icon-time" />
              08.00 - 20.00
            </div>
          </div>
          <div className="column ">
            <div className="part u-flexRowCenter ">
              <img alt="Adres" className="icon icon-placeholder" src={placeHolderIcon} />
              <a
                className="hide-ugly-a"
                rel="noopener noreferrer"
                target="_blank"
                href={getDeviceBasedRouteLink(this.storeLocation[0], this.storeLocation[1])}
              >
                Kozlu Yeni Sanayi Sitesi No:66 Kozlu Merkez / ZONGULDAK
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
