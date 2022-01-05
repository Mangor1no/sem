import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const carouselSetting = {
  autoPlay: true,
  infiniteLoop: true,
  showArrows: false,
  showThumbs: false,
  showStatus: false,
  interval: 6000,
  showIndicators: false,
};

export const SlideBanner = ({ banners }) => (
  <Carousel {...carouselSetting} style={{ height: '100%', minHeight: 'inherit' }}>
    {banners.map((banner) => (
      <div
        className="w-full h-full min-h-[600px] lg:min-h-[900px] flex text-[#F2F2F2] z-10"
        style={{ backgroundColor: banner.background }}
        key={banner.id}
      >
        <div
          className="flex items-center px-4 sm:px-20 xl:px-40 2xl:px-60 3xl:px-[368px] relative w-full h-full"
          style={{ minHeight: 'inherit' }}
        >
          <div
            className={`${banner.id > 0 ? 'items-end' : 'items-start'} flex flex-col w-full z-10`}
          >
            <div className="flex flex-col items-start">
              {banner.id < 1 && (
                <p className="text-base md:text-lg font-bold inline-flex items-center space-x-3 mb-4">
                  <div className="h-[3px] w-14 bg-yellow-100" />
                  <span className="text-[#F2F2F2]">UP TO 40% OFF</span>
                </p>
              )}
              <p
                className={`${
                  banner.id > 0 ? 'text-[#000000]' : 'text-[#F2F2F2]'
                } capitalize text-4xl lg:text-6xl xl:text-7xl xl:leading-[102px] font-bold mb-4 whitespace-pre-line text-left`}
              >
                {banner.title}
              </p>
              {banner?.description && (
                <p className="mb-[50px] text-black-100 font-neue max-w-[470px]">
                  {banner?.description}
                </p>
              )}
              <Link href="/shop/food">
                <button
                  type="button"
                  className={`${
                    banner.id > 0 ? 'btn-secondary' : 'btn-primary'
                  } btn-big text-bold uppercase transition duration-150`}
                >
                  Shop now
                </button>
              </Link>
            </div>
          </div>
          <img
            src={banner.image}
            alt="banner"
            className={`hidden md:block absolute bottom-0 w-2/3 ${
              banner.id > 0 ? 'left-0 max-w-[560px]' : 'right-0 max-w-[960px]'
            }`}
          />
        </div>
      </div>
    ))}
  </Carousel>
);
