import { IconPriceRange } from 'constants/Icons';
import React from 'react';
import client01 from 'public/images/home/home-client-1.png';
import client02 from 'public/images/home/home-client-2.png';
import client03 from 'public/images/home/home-client-3.png';
import client04 from 'public/images/home/home-client-4.png';
import client05 from 'public/images/home/home-client-5.png';

const clients = [client01, client02, client03, client04, client05];

const HomeClient = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl mt-2 font-semibold mb-4 uppercase">OUR CLIENTS</p>
      <div className="flex items-center justify-between mb-5">
        <div className="w-[90px] h-[2px] bg-primary mr-1" />
        <IconPriceRange />
        <div className="w-[90px] h-[2px] bg-primary ml-1" />
      </div>
      <div className="flex items-center justify-evenly flex-wrap w-full mt-4">
        {clients.map((client) => (
          <img src={client} alt="client" key={client} className="m-4" />
        ))}
      </div>
    </div>
  );
};

export default HomeClient;
