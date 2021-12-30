import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselSetting = {
  autoPlay: false,
  infiniteLoop: true,
  showArrows: false,
  showThumbs: true,
  showIndicators: false,
  showStatus: false,
};

const indicatorStyles = {
  background: '#fff',
  width: 8,
  height: 8,
  display: 'inline-block',
  margin: '0 8px',
};

export const ImageSlider = ({ banners }) => {
  const thumbComponent = (thumb) => {
    const thumbList = thumb.map((image, index) => (
      <div
        className="w-full bg-[#F2F2F2] flex items-center justify-center rounded-md relative overflow-hidden group"
        key={index}
      >
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-8 z-0">
          <div className="relative w-full h-full">
            <div className="rounded-full mix-blend-normal filter blur-xl absolute w-3/4 h-3/4 bottom-4 right-[2px] bg-[#14131345]" />
          </div>
        </div>
        <img
          src={image}
          alt="prod"
          className="md:w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
    ));

    return thumbList;
  };

  if (!banners) return null;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Carousel {...carouselSetting} renderThumbs={() => thumbComponent(banners)}>
        {banners.map((banner) => (
          <div
            className="w-full md:px-[45px] md:py-[50px] bg-[#F2F2F2] flex items-center justify-center rounded-2xl relative overflow-hidden group"
            key={banner}
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-8 z-0">
              <div className="relative w-full h-full">
                <div className="rounded-full mix-blend-normal filter blur-xl absolute w-3/4 h-3/4 bottom-4 right-[2px] bg-[#14131345]" />
              </div>
            </div>
            <img
              src={banner}
              alt="prod"
              className="md:w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
