import Layout from 'components/Layout';
import React from 'react';
import banner from 'public/images/service/service-banner.png';
import HomeCategory from 'components/home/HomeCategory';
import { IconPriceRange } from 'constants/Icons';
import Link from 'next/link';

const Service = () => {
  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">Services</p>
        </div>
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:my-[160px]">
        <div className="flex flex-col items-center">
          <p className="text-lg text-primary">We present to you </p>
          <p className="text-xl mt-2 font-semibold mb-4">OUR SERVICES</p>
          <div className="flex items-center justify-between mb-5">
            <div className="w-[90px] h-[2px] bg-primary mr-1" />
            <IconPriceRange />
            <div className="w-[90px] h-[2px] bg-primary ml-1" />
          </div>
          <div className="grid md:grid-cols-2 w-full h-1/2 gap-x-5 gap-y-24">
            <img
              src="/images/service/service-intro-01.png"
              alt="service-01"
              className="w-full h-full object-cover order-1"
            />
            <div className="order-2">
              <p className="font-bold text-xl mb-2 uppercase">ONLINE ORDERING</p>
              <p className="mb-5 font-poppins text-sm">
                With our Online Ordering Service, you can schedule a regular time and frequency for
                orders done at your convenience. Your Account Manager will call you at the appointed
                time to place your order, which we'll deliver at your convenience
              </p>
              <p className="mb-5 font-poppins text-sm">
                Your Customer Service Representative will also ensure that your needs are being met
                by monitoring your coffee program and by making themselves available to take any
                orders required between regular deliveries. This one-on-one service is the perfect
                solution for anyone who is looking for optimal convenience with a personal touch.
              </p>
              <p className="mb-5 font-poppins text-sm">
                Check out our website{' '}
                <Link href="https://kohi-coffee.vercel.app">
                  <a className="text-primary active:text-active">https://kohi-coffee.vercel.app</a>
                </Link>{' '}
                to take the best products for yourself.
              </p>
              <Link href="/shop">
                <button
                  type="button"
                  className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  shop now
                </button>
              </Link>
            </div>
            <img
              src="/images/service/service-intro-02.png"
              alt="service-02"
              className="w-full h-full object-cover order-3 md:order-4"
            />
            <div className="order-4 md:order-3">
              <p className="font-bold text-xl mb-2 uppercase">DELIVERY SERVICE</p>
              <p className="mb-5 font-poppins text-sm">
                This entirely hands-free coffee solution gives your company the benefit of a
                dedicated coffee representative who will manage your inventory, clean your
                equipment, collect payments and modify your program as needed.
              </p>
              <p className="mb-5 font-poppins text-sm">
                By visiting your location on a regular basis to ensure the quality of your care,
                your dedicated representative makes your coffee solution a completely worry-free
                experience.
              </p>
              <p className="mb-5 font-poppins text-sm">
                <span className="text-primary">
                  *Only available in select cities. May incur in additional fees.
                </span>
              </p>
              <Link href="/service/request?type=delivery-service">
                <button
                  type="button"
                  className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  Service request
                </button>
              </Link>
            </div>
            <img
              src="/images/service/service-intro-03.png"
              alt="service-03"
              className="w-full h-full object-cover order-5"
            />
            <div className="order-6">
              <p className="font-bold text-xl mb-2 uppercase">MAINtenance & repair service</p>
              <p className="mb-5 font-poppins text-sm">
                Do you have an espresso machine, grinder, water tower, or other coffee machine in
                need of repair or maintenance? Our experienced technicians would be glad to take a
                look. Our techs are available to travel within a hundred miles of Louisville,
                Kentucky. Fill out the form below and our team will get back to you within one
                business day with next steps.
              </p>
              <p className="mb-5 font-poppins text-sm">
                <b>Note:</b> If your equipment qualifies for warranty (parts or repair), contact the
                manufacturer or the vendor from whom you purchased the equipment.
              </p>
              <Link href="/service/request?type=maintenance-and-repair-service">
                <button
                  type="button"
                  className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  Service request
                </button>
              </Link>
            </div>
            <img
              src="/images/service/service-intro-04.png"
              alt="service-04"
              className="w-full h-full object-cover order-7 md:order-8"
            />
            <div className="order-8 md:order-7">
              <p className="font-bold text-xl mb-2 uppercase">Return and refund services</p>
              <p className="mb-5 font-poppins text-sm">
                Once your return is received and inspected, we will send you an email to notify you
                that we have received your returned item. If you are approved, then your refund will
                be processed, and a credit will automatically be applied to the original method of
                payment, within a certain amount of days.
              </p>
              <p className="mb-5 font-poppins text-sm">
                Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately
                we can’t offer you a refund or exchange. To be eligible for a return, your item must
                be unused and in the same condition that you received it.
              </p>
              <Link href="/service/request?type=return-and-refund-services">
                <button
                  type="button"
                  className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
                >
                  Service request
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
