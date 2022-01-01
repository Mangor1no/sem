import React, { Fragment } from 'react';
import { IconPriceRange } from 'constants/Icons';
import { categories } from 'data/constants';
import CategoryCard from '../CategoryCard';

const categoryText = ['COFFEE MACHINE', 'barista tools', 'COFFEE BEANS'];

const HomeCategory = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
        TRENDING CATEGORIES
      </p>
      <p className="text-2xl font-bold mb-16">Shop By Category</p>
      <div className="flex flex-wrap items-center justify-center w-full h-1/2 gap-11">
        {categories.slice(0, 4).map((category, index) => (
          <Fragment key={index}>
            <div className="flex flex-col items-center space-y-[18px]">
              <img
                src={category.image}
                alt={category.name}
                className="rounded-full w-[200px] h-[200px] min-w-[200px]"
              />
              <p className="text-lg">{category.name}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
