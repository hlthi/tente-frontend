import React from 'react';
import './MiniWorkContainer.scss';
import ImageZoom from 'react-medium-image-zoom';

interface IProps {
  src: string;
  who: string;
  alt?: string;
  location: string;
  detail: string;
}

const MiniWorkContainer: React.FC<IProps> = ({ src, who, location, detail }) => {
  return (
    <div className="mini-work-container">
      <ImageZoom
        image={{
          src,
          alt : detail,
          className:  'reference-img',
        }}
        zoomImage={{
          src,
          alt : detail,
        }}
      />
      <div>
        <div className="u-paddingBs font-18">{detail}</div>
        <div className="bold-font font-18">{who}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default MiniWorkContainer;
