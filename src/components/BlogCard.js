import React from 'react';
import dayjs from 'dayjs';
import { categories } from 'data/constants';
import Link from 'next/link';

const BlogCard = ({ banner, createdAt, shortDesc, title, category, blogId }) => {
  return (
    <Link href={`/blog/detail/${blogId}`}>
      <a className="flex">
        <div className="relative flex flex-col w-full h-full justify-center group cursor-pointer">
          <div className="overflow-hidden rounded-md">
            <img
              src={banner}
              alt="category"
              className="w-full h-full object-cover rounded-md group-hover:scale-110 transition duration-500 ease-in-out z-0"
            />
          </div>
          <p className="font-poppins text-[#7F7F7F] text-sm my-[10px]">
            <span className="mr-2">{dayjs(createdAt).format('MMM DD, YYYY')}</span>{' '}
            <span>{categories.filter((cat) => cat.category === category)?.[0]?.name}</span>
          </p>
          <p className="uppercase line-clamp-1 text-black text-lg group-hover:text-primary">
            {title}
          </p>
          <p className="font-poppins text-sm mt-3 line-clamp-4">{shortDesc}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
