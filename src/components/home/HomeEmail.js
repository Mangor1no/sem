import Link from 'next/link';
import React from 'react';

const HomeEmail = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-center">
        <div className="mb-5">
          <p className="uppercase text-xl">New Coffee machine</p>
          <p className="uppercase text-xl">new ways of making coffee</p>
        </div>
        <p className="font-poppins mb-9 md:mb-[60px] mr-20 xl:mr-40">
          Only you know what you love in a coffee machine. Discover new coffee machines with our
          customized taste quiz and get information. Also, find out the special flavour famous
          Aracabi coffee beans in the world.
        </p>
        <Link href="/blog">
          <button
            type="button"
            className="py-[10px] px-[50px] border text-white bg-primary rounded-md uppercase text-base max-w-max border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-300 ease-in-out"
          >
            Read more
          </button>
        </Link>
      </div>
      <div className="hidden md:grid lg:grid-cols-2 gap-5">
        <div className="w-full h-full overflow-hidden rounded-md">
          <img
            src="/images/home/home-blog-1.jpg"
            alt="blog-1"
            className="w-full h-full object-cover rounded-md hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <div className="w-full h-full hidden lg:block overflow-hidden rounded-md">
          <img
            src="/images/home/home-blog-2.jpg"
            alt="blog-2"
            className="w-full h-full object-cover rounded-md hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default HomeEmail;
