import React from 'react';
import Link from 'next/link';

const HomeSale = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[29px]">
      <div className="p-4 bg-yellow-100 flex justify-end w-full max-w-[575px] h-[306px] max-h-[306px] relative">
        <img
          src="/images/home/sale-01.png"
          alt="sale-01"
          className="w-[290px] h-[290px] absolute bottom-0 left-0 object-cover"
          style={{ maxHeight: 'inherit' }}
        />
        <div className="flex flex-col justify-center z-10 mr-16">
          <p className="text-blue-100 text-base md:text-lg font-bold">50% Off</p>
          <p className="text-blue-100 text-lg md:text-[32px] md:leading-[48px] font-bold mb-5">
            DOG FOOD
          </p>
          <Link href="/shop">
            <button type="button" className="btn-secondary px-[23px] py-[6px] w-max font-neue">
              shop now
            </button>
          </Link>
        </div>
      </div>
      <div className="p-4 bg-yellow-100 flex justify-end w-full max-w-[575px] h-[306px] max-h-[306px] relative">
        <img
          src="/images/home/sale-02.png"
          alt="sale-01"
          className="w-[290px] h-[290px] absolute bottom-0 left-0 object-cover"
          style={{ maxHeight: 'inherit' }}
        />
        <div className="flex flex-col justify-center z-10 mr-16">
          <p className="text-blue-100 text-base md:text-lg font-bold">50% Off</p>
          <p className="text-blue-100 text-lg md:text-[32px] md:leading-[48px] font-bold mb-5">
            CAT FOOD
          </p>
          <Link href="/shop">
            <button type="button" className="btn-secondary px-[23px] py-[6px] w-max font-neue">
              shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSale;
