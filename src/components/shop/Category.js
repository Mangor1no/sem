import { categories } from 'data/constants';
import Link from 'next/link';
import React from 'react';

const Category = ({ handleSelectCategory, food, medicine, toy, clothes, comestic }) => {
  const countItems = (category) => {
    switch (category) {
      case 'food':
        return food?.length;
      case 'medicine':
        return medicine?.length;
      case 'toy':
        return toy?.length;
      case 'clothes':
        return clothes?.length;
      case 'comestic':
        return comestic?.length;
      // case 'accessories':
      //   return accessories;
      default:
        return 0;
    }
  };

  return (
    <div className="px-[30px] py-[25px] pb-[50px] bg-black-2">
      <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-4">
        <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
        <span>Category</span>
      </p>
      <div className="flex flex-col space-y-2">
        {categories.map((category) => {
          return (
            <Link key={category.id} href={category.category} shallow>
              <a className="text-black-50">
                {category.name} ({countItems(category.category)})
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
