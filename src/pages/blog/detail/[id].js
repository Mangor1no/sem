import RecentCard from 'components/blog/RecentCard';
import Comment from 'components/Comment';
import Layout from 'components/Layout';
import { blogs } from 'data/constants';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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
          {/* <div className="hidden sm:block sm:col-span-1">
            <p className="uppercase mb-8 border-b border-primary py-2 max-w-max text-lg font-bold">
              Recent POST
            </p>
            {blogs.slice(0, 3).map((blg) => (
              <div className="flex  mb-[30px]" key={blg.id}>
                <RecentCard
                  banner={blg?.banner}
                  title={blg?.title}
                  category={blg?.category}
                  createdAt={blg?.createdAt}
                  blogId={blg?.id}
                />
              </div>
            ))}
          </div> */}
          <div className="col-span-full sm:col-span-2">
            <img
              src={blog?.banner}
              alt="banner"
              className="w-full h-full max-h-[500px] object-cover"
            />
            <p className="my-5 font-bold text-5xl text-blue-100">{blog?.title}</p>
            <p className=" text-disabled my-[10px] text-xs mb-4">
              <span className="mr-2">By {blog?.author}</span>{' '}
              <span className="mr-2">{dayjs(blog?.createdAt).format('MMM DD, YYYY')}</span>{' '}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: blog?.content }}
              className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
