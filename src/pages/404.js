import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="my-80 flex flex-col items-center justify-center">
        <p className="font-bold mb-4 text-[170px] leading-[231px]">404</p>
        <p className="capitalize text-[42px] font-bold">Page Cannot Be Found</p>
        <p className="max-w-[570px] text-center font-neue mb-8">
          Seems like nothing was found at this location. Try something else or you can go back to
          the homepage following the button below!
        </p>
        <Link href="/">
          <button
            type="button"
            className="px-12 py-4 uppercase border border-blue-100 text-blue-100"
          >
            Back to home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
