import React from 'react';
import Link from 'next/link';

const HomeBestDeal = () => {
  return (
    <div className="h-[300px] md:h-[500px] bg-blue-100 relative">
      <div className="absolute w-full h-full inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-yellow-100 font-neue tracking-[0.3em] mb-2">SAVE 50% OFF</p>
        <p className="text-white text-3xl md:text-5xl font-bold md:leading-[72px]">
          Best Deal Offer
        </p>
        <p className="max-w-sm md:max-w-[450px] text-white mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore etlop.
        </p>
        <Link href="/shop">
          <button type="button" className="btn-primary btn-big font-neue">
            SHOP NOW
          </button>
        </Link>
      </div>
      <div
        className="bg-yellow-100 w-2/5 h-full -mr-20 relative"
        style={{ clipPath: 'polygon(0 0, 67% 0, 100% 100%, 0% 100%)' }}
      >
        <img
          src="/images/home/best-deal-1.png"
          alt="doggo"
          className="w-1/2 max-w-[376px] absolute bottom-0 left-[15%]"
        />
      </div>
      <div className="absolute w-1/2 h-full top-0 right-0">
        <img
          src="/images/home/best-deal-2.png"
          alt="catto"
          className="w-full max-w-[405px] absolute bottom-0 right-[15%]"
        />
      </div>
    </div>
  );
};

export default HomeBestDeal;
