import React from 'react';
import { coffeeMachines as products } from 'data/constants';
import { Transition } from '@headlessui/react';
import Product from 'components/shop/Product';
import { IconPriceRange } from 'constants/Icons';

const HomeBestSeller = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl mt-2 font-semibold mb-4">BEST SELLER</p>
      <div className="flex items-center justify-between mb-5">
        <div className="w-[90px] h-[2px] bg-primary mr-1" />
        <IconPriceRange />
        <div className="w-[90px] h-[2px] bg-primary ml-1" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-5">
        {products?.slice(0, 8)?.map((product) => (
          <Transition
            as="div"
            key={product.id}
            show
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <Product product={product} />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default HomeBestSeller;
