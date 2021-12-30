import React from 'react';

const HomeContact = () => {
  return (
    <div className="h-full">
      <div className="absolute w-full h-full grid md:grid-cols-2">
        <div className="hidden md:block" />
        <div className="w-full h-full flex items-center justify-center md:justify-start p-5">
          <div className="bg-[#FFFFFF80] backdrop-filter backdrop-blur-2xl px-8 py-10 md:px-10 md:py-12 rounded-2xl">
            <p className="uppercase text-xl mb-4">Keep in touch</p>
            <p className="max-w-lg mb-5">
              We are constantly testing new beans and roasts, and welcome your feedback! Let us know
              if there is a particular country you would like to try.
            </p>
            <p className="max-w-lg mb-6 md:mb-14">
              Join our mailing list to participate in our tasting events that give us the buzz on
              what tastes best, and gives you a buzz for the rest of the day.
            </p>
            <div className="w-full flex items-center justify-between">
              <input
                type="text"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-transparent border rounded-l-md border-bgPrimary border-r-0 focus:outline-none"
              />
              <button
                type="button"
                className="text-center -ml-px bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white uppercase text-base rounded-r-md px-4 md:px-[42px] pt-[10px] pb-[11px] max-w-max hover:bg-transparent transition duration-300 ease-in-out"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/home/home-contact-1.jpg"
        alt="contact-banner"
        className="w-full h-full object-cover max-h-[600px] min-h-[500px]"
      />
    </div>
  );
};

export default HomeContact;
