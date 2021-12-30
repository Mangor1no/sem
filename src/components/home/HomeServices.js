import React from 'react';

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mt-2 uppercase">OUR SERVICES</p>
      <div className="h-px w-[150px] bg-primary mt-[10px] mb-[30px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-[30px] uppercase">
        <div>
          <p>ONLINE ORDERING</p>
        </div>
        <div>
          <p>DELIVERY SERVICE</p>
        </div>
        <div>
          <p>MAINTenance & REPAIR</p>
        </div>
        <div>
          <p>Return & refund</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
