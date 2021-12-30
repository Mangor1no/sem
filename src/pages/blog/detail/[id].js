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
        <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 grid grid-cols-3 gap-x-9">
          <div className="hidden sm:block sm:col-span-1">
            <p className="uppercase mb-8 border-b border-primary py-2 max-w-max text-lg font-bold">
              Recent POST
            </p>
            {blogs.slice(0, 3).map((blg) => (
              <div className="flex font-poppins mb-[30px]" key={blg.id}>
                <RecentCard
                  banner={blg?.banner}
                  title={blg?.title}
                  category={blg?.category}
                  createdAt={blg?.createdAt}
                  blogId={blg?.id}
                />
              </div>
            ))}
          </div>
          <div className="col-span-full sm:col-span-2">
            <img
              src="/images/home/home-blog-2.jpg"
              alt="banner"
              className="w-full h-full max-h-[500px] object-cover"
            />
            <p className="my-2 uppercase text-base">{blog?.title}</p>
            <p className="font-poppins text-disabled my-[10px] text-xs mb-4">
              <span className="mr-2">By {blog?.author}</span>{' '}
              <span className="mr-2">{dayjs(blog?.createdAt).format('MMM DD, YYYY')}</span>{' '}
            </p>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
            <Comment />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
