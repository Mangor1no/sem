import React from 'react';
import Link from 'next/link';

const HomeBestProduct = () => {
  return (
    <div>
      <div className="text-center md:text-left">
        <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
          BEST PRODUCT
        </p>
        <p className="text-lg md:text-2xl font-bold mb-11">Best Pet Food</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-[10px] xl:-mt-14">
        <div className="w-full md:w-1/2 text-black-50 font-neue order-2 md:order-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <br />
          <p>
            Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non
            proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error.
          </p>
          <Link href="/shop">
            <button type="button" className="btn-primary font-neue px-11 py-3 mt-11">
              SHOP NOW
            </button>
          </Link>
        </div>
        <img
          src="/images/home/best-product.png"
          alt="doggo-and-catto"
          className="w-full md:w-1/2 order-1 md:order-2 2xl:max-w-2xl 3xl:max-w-3xl"
        />
      </div>
    </div>
  );
};

export default HomeBestProduct;
