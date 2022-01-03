import { IconPriceRange } from 'constants/Icons';
import React, { Fragment } from 'react';
import { blogs } from 'data/constants';

import BlogCard from 'components/BlogCard';

const HomeBlog = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
        NEW & LATEST
      </p>
      <p className="text-lg md:text-2xl font-bold mb-11">Latest Blog</p>
      <div className="grid md:grid-cols-3 w-full h-1/2 gap-5">
        {blogs.slice(0, 3).map((blog) => (
          <Fragment key={blog.id}>
            <BlogCard
              banner={blog.banner}
              createdAt={blog.createdAt}
              shortDesc={blog.shortDesc}
              title={blog.title}
              category={blog.category}
              blogId={blog?.id}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
