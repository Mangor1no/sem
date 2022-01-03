import React, { Fragment } from 'react';
import { categories } from 'data/constants';
import Link from 'next/link';

const HomeCategory = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
        TRENDING CATEGORIES
      </p>
      <p className="text-lg md:text-2xl font-bold mb-16">Shop By Category</p>
      <div className="flex flex-wrap items-center justify-center w-full h-1/2 gap-11">
        {categories.slice(0, 5).map((category, index) => (
          <Link key={index} href={`/shop/${category.category}`}>
            <div className="flex flex-col items-center space-y-[18px] cursor-pointer group">
              <img
                src={category.image}
                alt={category.name}
                className="rounded-full w-[140px] h-[140px] min-w-[140px] md:w-[200px] md:h-[200px] md:min-w-[200px] group-hover:scale-110 transition transition-all duration-200"
              />
              <p className="text-lg">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
