import React from 'react';
import dayjs from 'dayjs';
import { categories } from 'data/constants';
import Link from 'next/link';

const BlogCard = ({ banner, createdAt, shortDesc, title, category, blogId }) => {
  return (
    <Link href={`/blog/detail/${blogId}`}>
      <a className="flex">
        <div className="relative w-full h-full group cursor-pointer border border-black-30 p-4">
          <div className="overflow-hidden ">
            <img
              src={banner}
              alt="category"
              className="w-full h-full max-h-[240px] object-cover group-hover:scale-110 transition duration-500 ease-in-out z-0"
            />
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <p className="font-neue text-[#7F7F7F] text-sm my-[10px]">
              By: <span className="text-blue-100 font-medium">Admin</span>
            </p>
            <p className="font-neue text-[#7F7F7F] text-sm my-[10px]">
              <span className="mr-2 text-blue-100 font-medium">
                {dayjs(createdAt).format('MMM DD, YYYY')}
              </span>{' '}
            </p>
          </div>
          <div className="text-center">
            <p className="line-clamp-2 text-black text-lg font-bold group-hover:text-blue-50">
              {title}
            </p>
            <button type="button" className="btn-primary btn-small font-neue font-medium mt-11">
              Read more
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
