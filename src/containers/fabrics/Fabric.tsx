import React, { } from 'react';
import './Fabric.scss';
import ImageZoom from 'react-medium-image-zoom';
import sunbrellaHeader from './images/sunbrella-header.png';
import docrilHeader from './images/docril-header.jpg';
import fabricData from './full_without_src.json';
import titleCase from 'title-case';
import Sunbrella from './Sunbrella';
import Docril from './Docril';
import listSvg from '../icons/list.svg';
import placeholderSvg from '../icons/placeholder.svg';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { useRouter } from '../../hooks/router-hook';

interface IProps {}

export interface IData {
  brand: string;
  category: string;
  type: string;
  full_key: string;
}

const printArr: IData[] = [];
const keys = Object.keys(fabricData);
for (const key of keys) {
  const parts = key.split('_');
  printArr.push({ brand: parts[0], category: parts[1], type: parts[2], full_key: key });
}

const Fabric: React.FC<IProps> = props => {
  const x = useRouter();
  // @ts-ignore
  const activeBrand = titleCase(x.location.pathname.replace('/kumas/', ''));

  return (
    <div className="fabric">
      <div className="font-40 bold-font font-title-color has-text-centered">{activeBrand} Katalog</div>

      <div className="u-flex u-flexRow u-flexJustifyCenter u-marginVx head-brand">
        <Link
          className={`button is-large u-paddingVx u-marginRs ${activeBrand === 'Sunbrella' ? 'is-link' : 'is-white'}`}
          to={'/kumas/sunbrella'}
        >
          <span className="semibold-font">Sunbrella</span>
        </Link>

        <Link
          className={`button is-large u-paddingVx u-marginRs ${activeBrand === 'Docril' ? 'is-link' : 'is-white'}`}
          to={'/kumas/docril'}
        >
          <span className="thin-font">&nbsp;&nbsp;&nbsp;&nbsp;Docril&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </Link>
      </div>

      <div className="head is-hidden-touch">
        {activeBrand === 'Sunbrella' && (
          <div className="u-flex u-flexRow u-flexJustifyBetween  u-marginBx">
            <div className="position-relative">
              <div className="left-info-box">
                <div className="font-light-color font-16 u-paddingBs">Sunbrella'nın Hikayesi</div>
                <div className="font-title-color font-18 semibold-font u-paddingBs">
                  Sunbrella kumaşlarının ilham kaynağı zengin renk paletleri, köklü trend hikayeleri ve bir dizi dokudur.
                  Koleksiyonlarımızı keşfedin ve ilham alın.
                </div>

                <div className="u-flex u-flexRow u-flexJustifyStart">
                  <img alt="tente özelliği" className="u-marginRm minicon" src={listSvg} />
                  <div className="font-light-color font-16">A Kalite + Yüksek Performans + Modern Görünüm</div>
                </div>
                <div className="u-flex u-flexRow u-flexJustifyStart u-paddingTm">
                  <img alt="tente ve branda üretim yeri" className="u-marginRm minicon" src={placeholderSvg} />
                  <div>
                    <div className="font-light-color font-16 semibold-font">Wasquehal Cedex</div>
                    <div className="font-light-color font-16">Fransa</div>
                  </div>
                </div>
              </div>
            </div>

            <ImageZoom
              image={{
                src: docrilHeader,
                alt: 'Docril',
                className: 'head-img',
              }}
              zoomImage={{
                src: docrilHeader,
                alt: 'Docril',
              }}
            />
          </div>
        )}

        {activeBrand === 'Docril' && (
          <div className="u-flex u-flexRow u-flexJustifyBetween  u-marginBx">
            <div className="position-relative">
              <div className="left-info-box">
                <div className="font-light-color font-16 u-paddingBs">Docril'in Hikayesi</div>
                <div className="font-title-color font-18 semibold-font u-paddingBs">
                  Önceleri tente kumaşları pamuk ipliklerlerden örülürdü... Docril akrilik elyaf ile ürettiği tente
                  kumaşlarında UV ışınlarına karşı üstün koruma, 10 yıla kadar garanti vaadediyor.
                </div>

                <div className="u-flex u-flexRow u-flexJustifyStart">
                  <img alt="tente özelliği" className="u-marginRm minicon" src={listSvg} />
                  <div className="font-light-color font-16">A Kalite + Yüksek Performans + Modern Görünüm</div>
                </div>
                <div className="u-flex u-flexRow u-flexJustifyStart u-paddingTm">
                  <img alt="tente kumaşı üretim yeri" className="u-marginRm minicon" src={placeholderSvg} />
                  <div>
                    <div className="font-light-color font-16 semibold-font">South Carolina</div>
                    <div className="font-light-color font-16">Amerika</div>
                  </div>
                </div>
              </div>
            </div>

            <ImageZoom
              image={{
                src: sunbrellaHeader,
                alt: 'Sunbrella Kumaş',
                className: 'head-img',
              }}
              zoomImage={{
                src: sunbrellaHeader,
                alt: 'Sunbrella Kumaş',
              }}
            />
          </div>
        )}
      </div>

      <Switch>
        <Route path="/kumas/docril" render={() => <Docril printArr={printArr} />} />
        <Route path="/kumas/sunbrella" render={() => <Sunbrella printArr={printArr} />} />
      </Switch>
    </div>
  );
};

export default Fabric;
