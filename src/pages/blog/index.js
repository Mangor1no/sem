import BlogCard from 'components/blog/BlogCard';
import RecentCard from 'components/blog/RecentCard';
import Layout from 'components/Layout';
import { blogs, categories } from 'data/constants';
import dayjs from 'dayjs';
import React, { Fragment } from 'react';
import banner from 'public/images/blog/blog-banner.png';

const Blog = () => {
  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">blog</p>
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:my-[160px] grid grid-cols-3 gap-x-9">
          <div className="col-span-1">
            <p className="uppercase mb-8 border-b border-primary py-2 max-w-max text-lg font-bold">
              Recent POST
            </p>
            {blogs.slice(0, 3).map((blog) => (
              <div className="flex font-poppins mb-[30px]" key={blog.id}>
                <RecentCard
                  banner={blog?.banner}
                  title={blog?.title}
                  category={blog?.category}
                  createdAt={blog?.createdAt}
                  blogId={blog?.id}
                />
              </div>
            ))}
          </div>
          <div className="col-span-2">
            {blogs.map((blog) => (
              <div className="flex font-poppins mb-[30px]" key={blog.id}>
                <BlogCard
                  banner={blog?.banner}
                  title={blog?.title}
                  category={blog?.category}
                  createdAt={blog?.createdAt}
                  desc={blog?.shortDesc}
                  author={blog?.author}
                  blogId={blog?.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
