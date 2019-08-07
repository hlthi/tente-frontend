import React, { Component } from 'react';
import './LocationMap.scss';
import { Helmet } from 'react-helmet';

interface Props {}

interface State {
  isLoadScript: boolean;
  storeMap: any | null;
}
class LocationMap extends Component<Props, State> {
  storeLocation: [number, number];
  ymaps: any;
  constructor(props: any) {
    super(props);
    this.storeLocation = [41.4328117, 31.7508171];
    this.state = {
      isLoadScript: false,
      storeMap: null,
    };
  }

  createYandexMap = () => {
    this.ymaps.ready(() => {
      const storeMap = new this.ymaps.Map('map', {
        center: this.storeLocation,
        zoom: 17,
        // and the full-screen button
        controls: ['smallMapDefaultSet'],
      });
      this.setState({
        storeMap,
      });
      const placeMark = new this.ymaps.Placemark(
        this.storeLocation,
        {
          iconContent: '<b class="font-12 bold-font primary-color">Bilgin Tente</b>',
          hintContent: 'Buradayız!',
          balloonContent: 'Bilgin Tente',
        },
        {
          // Disabling the replacement of the conventional balloon with the balloon panel.
          balloonPanelMaxMapArea: 0,
          draggable: 'false',
          preset: 'islands#blackStretchyIcon',
          // Making the balloon open even if there is no content.
          openEmptyBalloon: true,
        },
      );
      storeMap.geoObjects.add(placeMark);

      /**
       * Handling the event of opening the balloon on the geo object:
       * begin loading data, then updating its contents.
       */
      placeMark.events.add('balloonopen', (e: any) => {
        placeMark.properties.set('balloonContent', this.getDeviceBasedRouteItem());
      });
    });
  };

  componentDidMount(): void {
    const intervalId = setInterval(() => {
      // @ts-ignore
      if (window.ymaps) {
        clearInterval(intervalId);
        // @ts-ignore
        this.ymaps = window.ymaps;
        this.createYandexMap();
      }
    }, 100);
  }

  getDeviceBasedRouteItem() {
    const isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
    if (isMacLike) {
      return `<a target="_blank" href="maps://maps.apple.com/maps?daddr=${this.storeLocation[0]},
      ${this.storeLocation[1]}"><b class="font-16">Yol Tarifi Al</b></a>`;
    }
    return `<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${this.storeLocation[0]},
      ${this.storeLocation[1]}"><b class="font-16">Yol Tarifi Al</b></a>`;
  }

  componentDidUpdate(): void {}

  render() {
    return (
      <div>
        <Helmet>
          <script
            src="https://api-maps.yandex.ru/2.1/?apikey=8d41681d-39dd-4993-afe8-f681fb80bda2&lang=tr_TR&mode=release"
            type="text/javascript"
          />
        </Helmet>
        <div id="map" style={{ width: '100%', height: 350, marginTop: 30 }} />
      </div>
    );
  }
}

export default LocationMap;
