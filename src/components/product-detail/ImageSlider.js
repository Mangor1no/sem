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
  const arrowNext = () => {
    return (
      <div className="flex items-center justify-center w-[30px] h-[30px] min-w-[30px] bg-yellow-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9393 7.93934C10.3536 8.52513 10.3536 9.47487 10.9393 10.0607L15.8787 15L10.9393 19.9393C10.3536 20.5251 10.3536 21.4749 10.9393 22.0607C11.5251 22.6464 12.4749 22.6464 13.0607 22.0607L19.0607 16.0607C19.6464 15.4749 19.6464 14.5251 19.0607 13.9393L13.0607 7.93934C12.4749 7.35355 11.5251 7.35355 10.9393 7.93934Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };
  const arrowPrev = () => {
    return (
      <div className="flex items-center justify-center w-[30px] h-[30px] min-w-[30px] bg-yellow-100">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0607 22.0607C19.6464 21.4749 19.6464 20.5251 19.0607 19.9393L14.1213 15L19.0607 10.0607C19.6464 9.47487 19.6464 8.52513 19.0607 7.93934C18.4749 7.35355 17.5251 7.35355 16.9393 7.93934L10.9393 13.9393C10.3536 14.5251 10.3536 15.4749 10.9393 16.0607L16.9393 22.0607C17.5251 22.6464 18.4749 22.6464 19.0607 22.0607Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };

  const thumbComponent = (thumb) => {
    const thumbList = thumb.map((image, index) => (
      <div
        className="w-full bg-[#F2F2F2] flex items-center justify-center relative overflow-hidden group"
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
            className="w-full flex items-center justify-center relative overflow-hidden group"
            key={banner}
          >
            <img
              src={banner}
              alt="prod"
              className="w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
