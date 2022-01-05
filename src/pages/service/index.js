import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';

const Service = () => {
  return (
    <Layout>
      <div className="h-[480px] min-h-[480px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">Service</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">Service</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="flex justify-around items-center px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] gap-x-14 gap-y-24 py-32">
            <img
              src="/images/service/1.png"
              alt="service-01"
              className="w-1/2 h-full object-cover order-1 max-w-lg"
              max-w-lg
            />
            <div className="w-1/2 order-2">
              <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
                trimming
              </p>
              <p className="text-lg md:text-2xl font-bold mb-14">A fresh look for your pet</p>
              <p className="mb-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate
              </p>
              <p className="mb-5 text-sm">
                Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
                non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error.
              </p>
              <Link href="/shop">
                <button
                  type="button"
                  className="btn-primary transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  shop now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-around items-center px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] gap-x-14 gap-y-24 py-32 bg-[#E5E5E5]">
            <img
              src="/images/service/2.png"
              alt="service-02"
              className="w-1/2 h-full object-cover order-3 md:order-4 max-w-lg"
            />
            <div className="w-1/2 order-4 md:order-3">
              <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
                bathe
              </p>
              <p className="text-lg md:text-2xl font-bold mb-14">
                You can't bathe your pet? Don’t worry
              </p>

              <p className="mb-5  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate
              </p>
              <p className="mb-5 text-sm">
                Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
                non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error.
              </p>
              <Link href="/shop">
                <button
                  type="button"
                  className="btn-primary transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  shop now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-around items-center px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] gap-x-14 gap-y-24 py-32">
            <img
              src="/images/service/3.png"
              alt="service-03"
              className="w-1/2 h-full object-cover order-5"
              max-w-lg
            />
            <div className="w-1/2 order-6">
              <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
                health care
              </p>
              <p className="text-lg md:text-2xl font-bold mb-14">We care about your pet</p>

              <p className="mb-5  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate
              </p>
              <p className="mb-5 text-sm">
                Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
                non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error.
              </p>
              <Link href="/shop">
                <button
                  type="button"
                  className="btn-primary transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  shop now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-around items-center px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] gap-x-14 gap-y-24 py-32 bg-[#E5E5E5]">
            <img
              src="/images/service/4.png"
              alt="service-04"
              className="w-1/2 h-full object-cover order-7 md:order-8 max-w-lg"
            />
            <div className="w-1/2 order-8 md:order-7">
              <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
                hotel
              </p>
              <p className="text-lg md:text-2xl font-bold mb-14">
                Ah ha! We got your pet when you busy
              </p>

              <p className="mb-5  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate
              </p>
              <p className="mb-5 text-sm">
                Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
                non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error.
              </p>
              <Link href="/shop">
                <button
                  type="button"
                  className="btn-primary transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
