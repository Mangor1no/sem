import { categories } from 'data/constants';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

const RecentCard = ({ banner, title, category, createdAt, blogId }) => {
  return (
    <Link href={`/blog/detail/${blogId}`}>
      <a className="flex group">
        <div className="flex flex-col xl:flex-row">
          <div className="max-w-[210px] max-h-[150px] overflow-hidden mr-[10px] rounded-md">
            <img
              src={banner}
              alt="banner"
              className="max-w-[210px] max-h-[150px] w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
          <div className="my-2 xl:my-0">
            <p className="text-sm font-bold uppercase">{title}</p>
            <p className=" text-disabled my-[10px] text-xs">
              <span className="mr-2">{dayjs(createdAt).format('MMM DD, YYYY')}</span>{' '}
              <span>{categories.filter((cat) => cat.category === category)?.[0]?.name}</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecentCard;
