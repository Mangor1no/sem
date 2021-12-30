import Layout from 'components/Layout';
import React, { useEffect, useState } from 'react';
import banner from 'public/images/service/service-intro-03.png';
import { useRouter } from 'next/router';
import { IconPriceRange } from 'constants/Icons';
import { Slide, toast, ToastContainer } from 'react-toastify';

const ServiceRequest = () => {
  const router = useRouter();
  const { query } = router;

  const [serviceName, setServiceName] = useState('Services');

  useEffect(() => {
    if (query?.type) {
      setServiceName(query?.type.replaceAll('-', ' '));
    }
  }, [query]);

  const handleSendRequest = () => {
    toast('Your request has been sent successfully', {
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
      <div className="h-[400px] min-h-[400px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase text-center px-3">
            {serviceName}
          </p>
        </div>
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:my-[160px]">
        <div className="flex flex-col items-center">
          <p className="text-xl mt-2 font-semibold mb-4 uppercase">service request</p>
          <div className="flex items-center justify-between mb-5">
            <div className="w-[90px] h-[2px] bg-primary mr-1" />
            <IconPriceRange />
            <div className="w-[90px] h-[2px] bg-primary ml-1" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-4 max-w-[672px] mx-auto px-4 font-poppins">
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Contact name</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Company (optional)</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Email</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Phone number</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="col-span-full">
            <p className="text-xs text-[#7F7F7F] mb-2">Address *</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Machine information and serial number</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div>
            <p className="text-xs text-[#7F7F7F] mb-2">Machine type</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="col-span-full">
            <p className="text-xs text-[#7F7F7F] mb-2">Details of fault with the machine</p>
            <textarea
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
              cols={6}
            />
          </div>
          <div className="col-span-full">
            <p className="text-xs text-[#7F7F7F] mb-2">What you want to require in the services</p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="col-span-full">
            <p className="text-xs text-[#7F7F7F] mb-2">
              Set the time come to store or fix at your home
            </p>
            <input
              type="text"
              className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="col-span-full font-oswald bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out uppercase px-4 py-3 mt-12"
            onClick={handleSendRequest}
          >
            Book now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceRequest;
