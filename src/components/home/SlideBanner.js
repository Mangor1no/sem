import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselSetting = {
  autoPlay: true,
  infiniteLoop: true,
  showArrows: false,
  showThumbs: false,
  showStatus: false,
  dynamicHeight: true,
  interval: 6000,
};

const indicatorStyles = {
  background: '#fff',
  width: 8,
  height: 8,
  display: 'inline-block',
  margin: '0 8px',
};

export const SlideBanner = ({ banners }) => {
  return (
    <Carousel {...carouselSetting} style={{ height: '100%' }}>
      {banners.map((banner) => (
        <div className="w-full h-full relative" key={banner.id}>
          <img
            src={banner.image}
            alt="banner"
            className="w-auto h-full object-cover z-0 max-h-[800px] min-h-[600px]"
          />
        </div>
      ))}
    </Carousel>
  );
};
