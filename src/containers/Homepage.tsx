import React, { Component } from 'react';
import First from './homepage/First';
import Work from './homepage/Work';
import Contact from './homepage/Contact';
import LocationMap from './homepage/LocationMap';
import ShowMe from './homepage/ShowMe';
import LazyLoad from 'react-lazyload';

class Homepage extends Component {
  render() {
    return (
      <div>
        <First />
        <Work />
        <Contact />
        <LazyLoad height={350}  offset={400}>
          <LocationMap />
        </LazyLoad>
        <ShowMe />
      </div>
    );
  }
}

export default Homepage;
