import { IconCreditCard, IconDollar, IconSupport, IconTruck } from 'constants/Icons';
import React from 'react';

const Support = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
      <div className="flex items-center space-x-5">
        <IconTruck />
        <div>
          <p className="text-lg">Free Shipping</p>
          <p className="text-black-30">Capped at $20 per order</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <IconCreditCard />
        <div>
          <p className="text-lg">Card Payments</p>
          <p className="text-black-30">12 Months Installments</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <IconDollar />
        <div>
          <p className="text-lg">Easy Returnes</p>
          <p className="text-black-30">Shop With Confidence</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <IconSupport />
        <div>
          <p className="text-lg">24/7 Support</p>
          <p className="text-black-30">Contact 24 hours everyday</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
