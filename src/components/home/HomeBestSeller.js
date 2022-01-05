import React, { useState, useEffect } from 'react';
import { food as products } from 'data/constants';
import { Transition } from '@headlessui/react';
import Product from 'components/shop/Product';
import { useTimeoutFn } from 'utils/customHooks';

const tabs = ['all', 'new', 'best', 'featured', 'sale'];

const HomeBestSeller = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const [random, setRandom] = useState([]);
  useEffect(() => {
    if (isShowing) {
      const data = products.sort(() => 0.5 - Math.random()).slice(0, 8);
      setRandom(data);
    }
  }, [isShowing]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
        BEST PRODUCT
      </p>
      <p className="text-lg md:text-2xl font-bold mb-8 mmd:mb-16">New Collection</p>
      <div className="flex items-center flex-wrap justify-center gap-3 mb-9 md:mb-[60px]">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={`px-[20px] py-3 rounded-[40px] uppercase border-2 ${
              activeTab === tab ? 'border-blue-100 border-dashed' : 'border-transparent'
            }`}
            onClick={async () => {
              await setIsShowing(false);
              setActiveTab(tab);
              resetIsShowing();
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-5 min-h-[800px]">
        {random?.map((product, index) => (
          <Transition
            as="div"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
            show={isShowing}
            key={product.id}
          >
            <Product product={product} />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default HomeBestSeller;
