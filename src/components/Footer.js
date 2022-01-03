import Link from 'next/link';
import React from 'react';
import { IconFacebook, IconInstagram, IconLocation, IconPhone } from 'constants/Icons';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black-100 px-6 lg:px-24 2xl:px-64 pt-[101px] pb-[70px]">
        <div>
          <div className="flex flex-col items-center justify-center text-[#F2F2F2]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
              <div className="text-black-10">
                <p className="text-[32px] leading-[48px] font-bold mb-4">About Us</p>
                <p className="mb-[14px]">
                  Lorem ispsum dolor sit amet, consectel adipisicing elit, sed do eiusmod temp
                  incidid ut labore et dolo
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="bg-yellow-100 w-[37px] h-[37px] flex items-center justify-center"
                  >
                    <IconFacebook />
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-100 w-[37px] h-[37px] flex items-center justify-center"
                  >
                    <IconInstagram />
                  </button>
                </div>
              </div>
              <div className="text-black-10">
                <p className="text-[32px] leading-[48px] font-bold mb-4">Information</p>
                <p className="mb-[6px] cursor-pointer">About Us</p>
                <p className="mb-[6px] cursor-pointer">Delivery Infomation</p>
                <p className="mb-[6px] cursor-pointer">Privacy Policy</p>
                <p className="mb-[6px] cursor-pointer">Terms & Conditions</p>
                <p className="mb-[6px] cursor-pointer">Contact Us</p>
                <p className="mb-[6px] cursor-pointer">Log In Info</p>
              </div>
              <div className="text-black-10">
                <p className="text-[32px] leading-[48px] font-bold mb-4">Our Policy</p>
                <p className="mb-[6px] cursor-pointer">Gallery</p>
                <p className="mb-[6px] cursor-pointer">Brands</p>
                <p className="mb-[6px] cursor-pointer">Gift Certificates</p>
                <p className="mb-[6px] cursor-pointer">Specials</p>
                <p className="mb-[6px] cursor-pointer">My Account Us</p>
              </div>
              <div className="text-black-10">
                <p className="text-[32px] leading-[48px] font-bold mb-4">Contact Info</p>
                <p className="mb-8">
                  If you have any question, please contact us at{' '}
                  <a href="mailto:monngu@gmail.com" className="text-yellow-100">
                    monngu@gmail.com
                  </a>
                </p>
                <div className="flex items-center w-full space-x-5 mb-7">
                  <div className="bg-yellow-100 w-[52px] h-[52px] flex items-center justify-center text-white">
                    <IconLocation />
                  </div>
                  <div>
                    <p>110 Tran Phu - Ha Dong</p>
                    <p>Ha Noi</p>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-5">
                  <div className="bg-yellow-100 w-[52px] h-[52px] flex items-center justify-center text-white">
                    <IconPhone />
                  </div>
                  <div>
                    <p className="text-yellow-100">Phone number</p>
                    <p>+ 098 777 8888</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#B1B1B1] w-full bg-[#212227] px-6 lg:px-24 2xl:px-64">
        <div className="w-full border-t border-[#000000] py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-neue text-sm uppercase tracking-[0.3em] text-center md:text-left">
            2021 TicTic. Made by Arena Tran Phu
          </p>
          <img src="/images/payment.png" alt="payment" className="max-w-[192px]" />
        </div>
      </div>
    </>
  );
};

export default Footer;
