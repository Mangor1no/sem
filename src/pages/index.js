import HomeCategory from 'components/home/HomeCategory';
import Layout from 'components/Layout';
import HomeContact from 'components/home/HomeContact';
import HomeBestSeller from 'components/home/HomeBestSeller';
import HomeEmail from 'components/home/HomeEmail';
import HomeBlog from 'components/home/HomeBlog';
import HomeClient from 'components/home/HomeClient';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full min-h-[600px] lg:min-h-[900px] bg-blue-100 flex items-center justify-center text-[#F2F2F2] z-10">
        <div
          className="flex items-center px-4 sm:px-20 xl:px-40 2xl:px-60 3xl:px-[368px] relative w-full h-full"
          style={{ minHeight: 'inherit' }}
        >
          <div className="w-1/2 z-10">
            <p className="capitalize text-4xl lg:text-6xl xl:text-7xl xl:leading-[102px] font-bold mb-4">
              A Greate Meal <br /> With Your Pet
            </p>
            <Link href="/shop/coffee-machine">
              <button
                type="button"
                className="btn-primary text-bold px-14 py-4 uppercase transition duration-150"
              >
                Shop now
              </button>
            </Link>
          </div>
          <img
            src="images/home/banner.png"
            alt="banner"
            className="absolute bottom-0 right-0 w-2/3 max-w-[960px]"
          />
        </div>
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full py-16 md:py-[50px] bg-black-2">
        <HomeCategory />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full grid md:grid-cols-2 gap-x-5 mb-16 md:mb-[160px]">
        <HomeEmail />
      </div>
      <div className="max-h-[600px] min-h-[500px] relative mb-16 md:mb-[160px]">
        <HomeContact />
      </div>
      <div className="px-5 sm:px-16 xl:px-[250px] 2xl:px-[370px] w-full mb-16 md:mb-[160px]">
        <HomeBestSeller />
      </div>
      <div className="px-5 sm:px-16 xl:px-[250px] 2xl:px-[370px] w-full mb-16 md:mb-[160px]">
        <HomeBlog />
      </div>
      <div className="px-5 sm:px-16 xl:px-[250px] 2xl:px-[370px] w-full mb-16 md:mb-[160px]">
        <HomeClient />
      </div>
    </Layout>
  );
}
