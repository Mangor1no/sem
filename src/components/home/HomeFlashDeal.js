import React from 'react';
import { food as products } from 'data/constants';
import FlashDealCard from './FlashDealCard';

const HomeFlashDeal = () => {
  return (
    <div className="flex flex-col items-center text-center pt-[118px] pb-[147px]">
      <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
        TRENDING PRODUCTS
      </p>
      <p className="text-lg md:text-2xl font-bold mb-16">Deal Of The Day</p>
      <div className="flex flex-wrap items-center justify-center w-full h-1/2 gap-[88px]">
        <FlashDealCard product={products[0]} />
        <FlashDealCard product={products[1]} />
      </div>
    </div>
  );
};

export default HomeFlashDeal;
