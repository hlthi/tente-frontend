import React, { Component } from 'react';
import ContactInside from './contact/Contact';
import LocationMap from './contact/LocationMap';
import Form from './contact/Form';
import LazyLoad from 'react-lazyload';

class Contact extends Component {
  render() {
    return (
      <div>
        <Form />
        <ContactInside />
        <LazyLoad height={350} offset={400}>
          <LocationMap />
        </LazyLoad>
      </div>
    );
  }
}

export default Contact;
