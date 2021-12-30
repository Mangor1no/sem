import { categories } from 'data/constants';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ banner, title, category, createdAt, desc, author, blogId }) => {
  return (
    <Link href={`/blog/detail/${blogId}`}>
      <a className="flex group">
        <div className="max-w-[450px] max-h-[300px] overflow-hidden mr-[30px] rounded-md w-full h-full ">
          <img
            src={banner}
            alt="banner"
            className="max-w-[450px] max-h-[300px] w-full h-full object-cover mr-[30px] group-hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase">{title}</p>
          <p className="font-poppins text-disabled my-[10px] text-xs">
            <span className="mr-2">By {author}</span>{' '}
            <span className="mr-2">{dayjs(createdAt).format('MMM DD, YYYY')}</span>{' '}
            <span>{categories.filter((cat) => cat.category === category)?.[0]?.name}</span>
          </p>
          <p className="text-sm">{desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
