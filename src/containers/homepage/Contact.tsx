import React, { Component } from 'react';
import './Contact.scss';
import { getDeviceBasedRouteLink } from '../../helper';

interface ContactItemProps {
  title: string;
  text: string;
}

const ContactItem = (props: ContactItemProps) => {
  return (
    <div className="contact-item">
      <div className="font-20 bold-font primary-color">{props.title}</div>
      <div className="font-16">{props.text}</div>
    </div>
  );
};

interface Props {}

class Contact extends Component<Props> {
  storeLocation: [string,string];

  constructor(props: Props) {
    super(props);
    this.storeLocation = ['41.4328117', '31.7508171'];
  }

  render() {
    return (
      <div id="contact-container">
        {/* Header */}
        <div className="columns">
          <div className="column is-one-fifth">
            <hr className="line" />
          </div>
          <div className="column">
            <span className="font-15 thin-font font-primary-color">BİZİ ZİYARET EDİN</span>
          </div>
        </div>

        {/* contact content*/}
        <div className="columns">
          <div className="column is-one-fifths">
            <ContactItem title="Adres" text="Kozlu Yeni Sanayi Sitesi No:66 Kozlu Merkez / ZONGULDAK" />
          </div>
          <div className="column is-one-fifths">
            <ContactItem title="Telefon" text="0543 785 61 00" />
          </div>
          <div className="column is-one-fifths">
            <ContactItem title="Çalışma Saatleri" text="Hafta içi her gün 08.00 - 20.00" />
          </div>
          <div className="column">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={getDeviceBasedRouteLink(this.storeLocation[0], this.storeLocation[1])}
              className="button is-large u-paddingVx"
            >
              <span className="primary-color button-text semibold-font">Yol Tarifi Al</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
