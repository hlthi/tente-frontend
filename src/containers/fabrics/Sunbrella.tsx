import React from 'react';
import titleCase from 'title-case';
import fabricData from './full_without_src.json';
import ImageZoom from 'react-medium-image-zoom';
import { IData } from './Fabric';
import LazyLoad from 'react-lazyload';

interface IProps {
  printArr: IData[];
}

const Sunbrella: React.FC<IProps> = props => {
  const { printArr } = props;
  return (
    <div>
      <div className="font-38 bold-font font-title-color has-text-centered">Tente/Gölgelik</div>
      {printArr
        .filter(item => item.brand === 'sunbrella')
        .filter(item => item.category === 'gölgelik')
        .map(item => {
          return (
            <div key={item.full_key}>
              <div className="font-28 bold-font bono font-light-color has-text-centered">{titleCase(item.type)}</div>
              <div className="grid-container">
                {/*
                  // @ts-ignore*/
                fabricData[item.full_key].map((data_item: any) => {
                  return (
                    <LazyLoad height={319} key={data_item['text']}  offset={100}>
                      <div
                        className="fi-item  u-flex u-flexCol u-flexJustifyCenter u-flexAlignItemsCenter"
                        key={data_item['text']}
                      >
                        <ImageZoom
                          image={{
                            src: `/images/${data_item['text'].replace(/\//g, '&')}.jpg`,
                            alt: data_item['text'],
                            className: 'fabric-img-small',
                          }}
                          zoomImage={{
                            src: `/images/${data_item['text']}(1000x1000).jpg`,
                            alt: data_item['text'],
                            className: 'fabric-img-big',
                          }}
                        />

                        <div className="font-16 thin-font u-paddingTx has-text-centered">{data_item['text']}</div>
                      </div>
                    </LazyLoad>
                  );
                })}
              </div>
            </div>
          );
        })}

      <div className="font-38 bold-font font-title-color has-text-centered">Şemsiye</div>
      {printArr
        .filter(item => item.brand === 'sunbrella')
        .filter(item => item.category === 'şemsiye')
        .map(item => {
          return (
            <div key={item.full_key}>
              <div className="font-28 bold-font bono font-light-color has-text-centered">{titleCase(item.type)}</div>
              <div className="grid-container">
                {/*
                  // @ts-ignore*/
                fabricData[item.full_key].map((data_item: any) => {
                  return (
                    <LazyLoad height={319} key={data_item['text']}  offset={100}>
                      <div
                        className="fi-item u-flex u-flexCol u-flexJustifyCenter u-flexAlignItemsCenter"
                        key={data_item['text']}
                      >
                        <ImageZoom
                          image={{
                            src: `/images/${data_item['text'].replace(/\//g, '&')}.jpg`,
                            alt: data_item['text'],
                            className: 'fabric-img-small',
                          }}
                          zoomImage={{
                            src: `/images/${data_item['text']}(1000x1000).jpg`,
                            alt: data_item['text'],
                            className: 'fabric-img-big',
                          }}
                        />
                        <div className="font-16 thin-font u-paddingTx has-text-centered">{data_item['text']}</div>
                      </div>
                    </LazyLoad>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Sunbrella;
