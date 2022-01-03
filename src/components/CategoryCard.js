import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ image, text, logo, category }) => {
  return (
    <div className="relative flex w-full h-full items-center justify-center bg-[#EBEBF0] group overflow-hidden rounded-md">
      <div className="absolute inset-0 w-full h-full p-5 group-hover:bg-[#2B2B3550] z-10 rounded-md transition duration-500 ease-in-out">
        <div className="w-full h-full border border-[#F2F2F2] rounded-md" />
      </div>
      <img
        src={image}
        alt="category"
        className="w-full h-full object-cover rounded-md group-hover:scale-110 transition duration-500 ease-in-out z-0"
      />
      <div className="absolute inset-0 w-full h-full flex flex-col-reverse p-10 text-[#F2F2F2] z-20">
        <Link href={`/shop/${category}`}>
          <button
            type="button"
            className="text-center bg-primary border border-primary text-white uppercase text-base rounded-md px-[42px] py-[10px] hidden group-hover:block max-w-max mt-5 hover:bg-transparent transition duration-300 ease-in-out"
          >
            Shop now
          </button>
        </Link>
        <p className=" text-sm mt-5 hidden group-hover:block">
          Different types of coffee machine such as grinder, maker, roaster, etc from different
          brand
        </p>
        <p className="uppercase">{text}</p>
        <img src={logo} alt="coffee-maker" className="max-w-min mb-5" />
      </div>
    </div>
  );
};

export default CategoryCard;
