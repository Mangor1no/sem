import React, { Fragment } from 'react';
import category01 from 'public/images/home/home-category-1.jpg';
import category02 from 'public/images/home/home-category-2.jpg';
import category03 from 'public/images/home/home-category-3.jpg';
import categoryLogo01 from 'public/images/home/coffee-maker.png';
import categoryLogo02 from 'public/images/home/barista-tools.png';
import categoryLogo03 from 'public/images/home/coffee-beans.png';
import { IconPriceRange } from 'constants/Icons';
import { categories } from 'data/constants';
import CategoryCard from '../CategoryCard';

const categoryImages = [category01, category02, category03];
const categoryLogoImages = [categoryLogo01, categoryLogo02, categoryLogo03];
const categoryText = ['COFFEE MACHINE', 'barista tools', 'COFFEE BEANS'];

const HomeCategory = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg text-primary">What We Have Here</p>
      <p className="text-xl mt-2 font-semibold mb-4">CATEGORY OF KOHI</p>
      <div className="flex items-center justify-between mb-5">
        <div className="w-[90px] h-[2px] bg-primary mr-1" />
        <IconPriceRange />
        <div className="w-[90px] h-[2px] bg-primary ml-1" />
      </div>
      <div className="grid md:grid-cols-3 w-full h-1/2 gap-5">
        {categoryImages.map((category, index) => (
          <Fragment key={index}>
            <CategoryCard
              image={category}
              text={categoryText[index]}
              logo={categoryLogoImages[index]}
              category={categories[index]?.category}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
