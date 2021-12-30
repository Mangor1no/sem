import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="my-80 flex flex-col items-center justify-center">
        <p className="text-primary font-poppins font-semibold mb-4">What Happens Here</p>
        <p className="uppercase text-xl font-semibold">PAGE YOU ARE looking is not found</p>
        <div className="w-52 h-px bg-primary my-7" />
        <img src="/images/404.png" alt="404" />
        <Link href="/">
          <button type="button" className="px-12 py-3 uppercase bg-primary text-white rounded-md">
            Back to shop
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
