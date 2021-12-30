import { IconPriceRange } from 'constants/Icons';
import React, { Fragment } from 'react';
import { blogs } from 'data/constants';

import BlogCard from 'components/BlogCard';

const HomeBlog = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl mt-2 font-semibold mb-4 uppercase">From our blog</p>
      <div className="flex items-center justify-between mb-5">
        <div className="w-[90px] h-[2px] bg-primary mr-1" />
        <IconPriceRange />
        <div className="w-[90px] h-[2px] bg-primary ml-1" />
      </div>
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
