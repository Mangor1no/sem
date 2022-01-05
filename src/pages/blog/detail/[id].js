import Layout from 'components/Layout';
import { blogs } from 'data/constants';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IconTime } from 'constants/Icons';
import BlogCard from 'components/BlogCard';
import Comment from 'components/blog/Comment';

dayjs.extend(relativeTime);

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);

  const { query } = useRouter();

  useEffect(() => {
    if (query?.id) {
      const currentBlog = blogs.filter((blg) => blg.id === +query?.id)?.[0];
      setBlog(currentBlog);
    }
  }, [query]);

  return (
    <Layout>
      <div className="mt-[64px]">
        <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16">
          <div className="col-span-full sm:col-span-2 mb-36">
            <img
              src={blog?.banner}
              alt="banner"
              className="w-full h-full max-h-[500px] object-cover"
            />
            <p className="my-5 font-bold text-5xl text-blue-100">{blog?.title}</p>
            <p className=" text-disabled my-[10px] text-sm mb-4 flex items-center">
              <span className="mr-8">By {blog?.author}</span>{' '}
              <span className="mr-2 flex items-center space-x-1">
                <IconTime /> <span>{dayjs(blog?.createdAt - 3274683812).fromNow()}</span>
              </span>{' '}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: blog?.content }}
              className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[300px] font-neue"
            />
          </div>
          <Comment />
          <div>
            <p className="text-[32px] leading-[48px] font-bold mb-[53px]">You may also like:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full h-1/2 gap-x-[30px] gap-y-[90px]">
              {blogs.slice(0, 6).map((blog) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
