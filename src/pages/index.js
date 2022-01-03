import HomeCategory from 'components/home/HomeCategory';
import Layout from 'components/Layout';
import HomeBestSeller from 'components/home/HomeBestSeller';
import HomeBlog from 'components/home/HomeBlog';
import Link from 'next/link';
import HomeSale from 'components/home/HomeSale';
import HomeBestDeal from 'components/home/HomeBestDeal';
import HomeFlashDeal from 'components/home/HomeFlashDeal';
import HomeBestProduct from 'components/home/HomeBestProduct';

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full min-h-[600px] lg:min-h-[900px] bg-blue-100 flex items-center justify-center text-[#F2F2F2] z-10">
        <div
          className="flex items-center px-4 sm:px-20 xl:px-40 2xl:px-60 3xl:px-[368px] relative w-full h-full"
          style={{ minHeight: 'inherit' }}
        >
          <div className="w-full md:w-1/2 z-10">
            <p className="text-base md:text-lg font-bold inline-flex items-center space-x-3 mb-4">
              <div className="h-[3px] w-14 bg-yellow-100" />
              <span>UP TO 40% OFF</span>
            </p>
            <p className="capitalize text-4xl lg:text-6xl xl:text-7xl xl:leading-[102px] font-bold mb-4">
              A Greate Meal <br /> With Your Pet
            </p>
            <Link href="/shop/food">
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
            className="hidden md:block absolute bottom-0 right-0 w-2/3 max-w-[960px]"
          />
        </div>
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full py-16 md:pt-[50px] md:pb-[86px] bg-black-2">
        <HomeCategory />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:mb-[114px] md:mt-[146px]">
        <HomeSale />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[160px]">
        <HomeBestSeller />
      </div>
      <div className="max-h-[600px] md:min-h-[500px] relative">
        <HomeBestDeal />
      </div>
      <div className="px-5 sm:px-16 w-full mb-16 md:mb-20 bg-black-2">
        <HomeFlashDeal />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[200px]">
        <HomeBestProduct />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[160px]">
        <HomeBlog />
      </div>
    </Layout>
  );
}
