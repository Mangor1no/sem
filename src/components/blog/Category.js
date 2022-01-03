import { categories } from 'data/constants';
import Link from 'next/link';
import React from 'react';

const Category = ({ handleSelectCategory, data }) => {
  const countItems = (category) => {
    return data.filter((blog) => blog.category === category)?.length;
  };

  return (
    <div className="px-[30px] py-[25px] pb-[50px] border border-[#C9C9C9]">
      <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-4">
        <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
        <span>Popular Categories</span>
      </p>
      <div className="flex flex-col divide-y divide-black-10">
        {categories.map((category) => {
          return (
            <p
              className="text-black-50 inline-flex justify-between items-center py-4"
              key={category.category}
            >
              <span>{category.name}</span> <span>({countItems(category.category)})</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
