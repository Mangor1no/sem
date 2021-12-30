import React from 'react';
import Layout from 'components/Layout';
import banner from 'public/images/contact/contact-banner.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from 'react-toastify';

const Contact = () => {
  const handleSendRequest = () => {
    toast('Your message has been sent successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="h-[600px] min-h-[600px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">Contact</p>
        </div>
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:my-[160px] grid md:grid-cols-2">
        <img
          src="/images/contact/contact-map.png"
          alt="contact"
          className="w-full h-full object-cover"
        />
        <div className="mt-20 md:mt-0 md:ml-32">
          <div className="mb-12">
            <p className="text-lg font-bold uppercase mb-4">Contact details</p>
            <div className="font-poppins mb-4">
              <p className="mb-2 text-disabled text-xs">Email</p>
              <p className="text-sm">kohishop@gmail.com</p>
            </div>
            <div className="font-poppins mb-4">
              <p className="mb-2 text-disabled text-xs">Number</p>
              <p className="text-sm">+84 3838 66830</p>
            </div>
            <div className="font-poppins mb-4">
              <p className="mb-2 text-disabled text-xs">Location</p>
              <p className="text-sm">110 Tran Phu, Ha Dong, Ha Noi</p>
            </div>
          </div>
          <div className="mb-12">
            <p className="text-lg font-bold uppercase mb-4">Leave a message</p>
            <div className="font-poppins mb-4">
              <p className="text-xs text-[#7F7F7F] mb-2">Email</p>
              <input
                type="email"
                className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="font-poppins mb-16">
              <p className="text-xs text-[#7F7F7F] mb-2">Write a message</p>
              <textarea
                className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                cols={6}
              />
            </div>
            <button
              type="button"
              onClick={handleSendRequest}
              className="uppercase text-base font-semibold w-full px-4 py-3 bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out"
            >
              Send to us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
