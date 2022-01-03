import BlogCard from 'components/BlogCard';
import RecentCard from 'components/blog/RecentCard';
import Layout from 'components/Layout';
import { blogs } from 'data/constants';
import React, { Fragment, useState, useEffect } from 'react';
import Category from 'components/blog/Category';
import Filter from 'components/blog/Filter';
import { IconPaginateNext, IconPaginatePrev } from 'constants/Icons';
import ReactPaginate from 'react-paginate';

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('food');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (blogs) {
      setPageCount(Math.ceil(blogs.length / 12));
    }
  }, [blogs]);

  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
  };

  const handlePageClick = async (page) => {
    await setCurrentPage(page.selected);
  };

  const handleFilter = () => {};

  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10">
            <p className="text-2xl text-black-100 font-bold capitalize">Blog</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">Blog</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mt-10 mb-16 md:mt-16 md:mb-[160px] grid grid-cols-3 gap-x-9">
          <div className="col-span-1">
            <div className="hidden md:flex flex-col max-w-[262px] w-full gap-y-[42px] mr-[30px]">
              <Category handleSelectCategory={handleSelectCategory} data={blogs} />
              <Filter handleFilter={handleFilter} blogs={blogs} />
              <div className="px-[30px] py-[25px] pb-[50px] border border-[#C9C9C9]">
                <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
                  <span>Recent Posts</span>
                </p>
                <div className="flex flex-col divide-y divide-black-10">
                  <div className="flex items-center space-x-4 py-6">
                    <img
                      src={blogs[0].banner}
                      alt=""
                      className="object-cover w-[67px] h-[67px] max-w-[67px]"
                    />
                    <p>{blogs[0].title}</p>
                  </div>
                  <div className="flex items-center space-x-4 py-6">
                    <img
                      src={blogs[1].banner}
                      alt=""
                      className="object-cover w-[67px] h-[67px] max-w-[67px]"
                    />
                    <p>{blogs[1].title}</p>
                  </div>
                  <div className="flex items-center space-x-4 py-6">
                    <img
                      src={blogs[2].banner}
                      alt=""
                      className="object-cover w-[67px] h-[67px] max-w-[67px]"
                    />
                    <p>{blogs[2].title}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="uppercase mb-8 border-b border-primary py-2 max-w-max text-lg font-bold">
              Recent POST
            </p>
            {blogs.slice(0, 3).map((blog) => (
              <div className="flex  mb-[30px]" key={blog.id}>
                <RecentCard
                  banner={blog?.banner}
                  title={blog?.title}
                  category={blog?.category}
                  createdAt={blog?.createdAt}
                  blogId={blog?.id}
                />
              </div>
            ))} */}
          </div>
          <div className="col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-[31px] gap-y-[42px]">
            {blogs.map((blog) => (
              <Fragment key={blog.id}>
                <BlogCard
                  banner={blog?.banner}
                  title={blog?.title}
                  category={blog?.category}
                  createdAt={blog?.createdAt}
                  desc={blog?.shortDesc}
                  author={blog?.author}
                  blogId={blog?.id}
                />
              </Fragment>
            ))}
            {blogs.length > 0 && (
              <div className="flex items-center my-24">
                <ReactPaginate
                  previousLabel={
                    pageCount > 1 ? (
                      <div className="border border-blue-100 px-2 py-[8.5px]">
                        <IconPaginatePrev />
                      </div>
                    ) : null
                  }
                  nextLabel={
                    <div className="border border-blue-100 px-2 py-[8.5px]">
                      <IconPaginateNext />
                    </div>
                  }
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={Math.ceil(blogs.length / 12)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName="flex flex-row items-center text-sm font-bold space-x-3"
                  activeClassName="bg-blue-100 box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
                  activeLinkClassName="text-white"
                  pageClassName="box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center border border-blue-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
