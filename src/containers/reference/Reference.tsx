import React from 'react';
import './Reference.scss';
import tente4 from './images/tente-4.jpg';
import tente5 from './images/tente-5.jpeg';
import tente6 from './images/tente-6.jpeg';
import tente7 from './images/tente-7.jpeg';
import tente8 from './images/tente-8.jpeg';
import tente9 from './images/tente-9.jpeg';
import tente10 from './images/tente-10.jpeg';
import tente11 from './images/tente-11.jpeg';
import tente13 from './images/tente-13.jpeg';
import tente14 from './images/tente-14.jpeg';
import tente16 from './images/tente-16.jpeg';
import tente17 from './images/tente-17.jpeg';
import tente18 from './images/tente-18.jpeg';
import tente19 from './images/tente-19.jpeg';
import MiniWorkContainer from './MiniWorkContainer';
import ImageZoom from 'react-medium-image-zoom';
import listSvg from '../icons/list.svg';
import placeholderSvg from '../icons/placeholder.svg';

interface IProps {}

const Reference: React.FC<IProps> = props => {
  return (
    <div className="reference">
      <div className="head is-hidden-touch">
        <div className="u-flex u-flexRow u-flexJustifyBetween  u-marginBx">
          <div className="position-relative">
            <div className="left-info-box">
              <div className="font-light-color font-16 u-paddingBs">Başarı Hikayeleri</div>
              <div className="font-title-color font-18 semibold-font u-paddingBx">
                Güneşin ve yağmurun altında kalmadan, hayatın tüm keyfini çıkarın.
              </div>

              <div className="u-flex u-flexRow u-flexJustifyStart">
                <img alt="tente türü" className="u-marginRm minicon" src={listSvg} />
                <div className="font-light-color font-16">Gölgelendirme</div>
              </div>
              <div className="u-flex u-flexRow u-flexJustifyStart u-paddingTm">
                <img alt="tente lokasyon" className="u-marginRm minicon" src={placeholderSvg} />
                <div>
                  <div className="font-light-color font-16 semibold-font">Kozlu</div>
                  <div className="font-light-color font-16">Zonguldak</div>
                </div>
              </div>
            </div>
          </div>

          <ImageZoom
            image={{
              src: tente4,
              alt: 'tente versiyon 1',
              className: 'reference-img',
            }}
            zoomImage={{
              src: tente4,
              alt: 'tente versiyon 1',
            }}
          />
        </div>
        <div className="u-flex u-flexRow u-flexJustifyBetween  u-marginBx">
          <ImageZoom
            image={{
              src: tente5,
              alt: 'tente versiyon 2',
              className: 'reference-img',
            }}
            zoomImage={{
              src: tente5,
              alt: 'tente versiyon 2',
            }}
          />

          <div className="position-relative">
            <div className="right-info-box">
              <div className="font-light-color font-16 u-paddingBs">Başarı Hikayeleri</div>
              <div className="font-title-color font-18 semibold-font u-paddingBx">
                Tarihi dokular ile modern dünyayı harmanlayın.
              </div>

              <div className="u-flex u-flexRow u-flexJustifyStart">
                <img alt="tente türü" className="u-marginRm minicon" src={listSvg} />
                <div className="font-light-color font-16">Gölgelendirme</div>
              </div>
              <div className="u-flex u-flexRow u-flexJustifyStart u-paddingTm">
                <img alt="tente lokasyon" className="u-marginRm minicon" src={placeholderSvg} />
                <div>
                  <div className="font-light-color font-16 semibold-font">Kozlu</div>
                  <div className="font-light-color font-16">Zonguldak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="other">
        <div className="columns">
          <div className="column">
            <MiniWorkContainer
              src={tente7}
              who={'Ali Bey'}
              location={'Zonguldak'}
              detail={'Kamyonet Branda Kaplaması'}
            />
            <MiniWorkContainer src={tente8} who={'Maden Mühendisleri Cemiyeti'} location={'Zonguldak'} detail={'Cafe Şemsiye'} />
            <MiniWorkContainer src={tente9} who={'Zondaş Madencilik'} location={'Zonguldak'} detail={'Depo Branda Kaplama'} />
            <MiniWorkContainer
              src={tente16}
              who={'Gökçek Mermer'}
              location={'Zonguldak'}
              detail={'İş Makine Branda Çalışması'}
            />
            <MiniWorkContainer src={tente17} who={'Kozlu Belediyesi'} location={'Zonguldak'} detail={'Şeffaf Kaplama'} />
            <MiniWorkContainer
              src={tente18}
              who={'Buket Mobilya'}
              location={'Zonguldak'}
              detail={'Kamyonet Branda Kaplaması,Markalı'}
            />
          </div>
          <div className="column">
            <MiniWorkContainer src={tente13} who={'Emirgan Hotel'} location={'Zonguldak'} detail={'Körüklü Garaj'} />
            <MiniWorkContainer src={tente14} who={'Saklı Cafe'} location={'Zonguldak'} detail={'Körüklü Tente'} />
            <MiniWorkContainer src={tente10} who={'Zontaş Madencilik'} location={'Zonguldak'} detail={'Silo Branda Kaplaması'} />
            <MiniWorkContainer src={tente19} who={'Mehmet Bey'} location={'Zonguldak'} detail={'Körüklü Tente'} />
            <MiniWorkContainer src={tente11} who={'Akçay Cafe'} location={'Zonguldak'} detail={'Şeffaf Kaplama'} />
            <MiniWorkContainer src={tente6} who={'Papila Ekmek Fırını'} location={'Zonguldak'} detail={'Araç Branda Kaplaması'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
