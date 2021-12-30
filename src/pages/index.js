import HomeCategory from 'components/home/HomeCategory';
import HomeServices from 'components/home/HomeServices';
import Layout from 'components/Layout';
import { SlideBanner } from 'components/home/SlideBanner';
import banner01 from 'public/images/home/home-banner-1.jpg';
import banner02 from 'public/images/home/home-banner-2.jpg';
import banner03 from 'public/images/home/home-banner-3.jpeg';
import HomeContact from 'components/home/HomeContact';
import HomeBestSeller from 'components/home/HomeBestSeller';
import HomeEmail from 'components/home/HomeEmail';
import HomeBlog from 'components/home/HomeBlog';
import HomeClient from 'components/home/HomeClient';
import Link from 'next/link';

const images = [banner01, banner02, banner03];

const banners = [
  {
    id: 0,
    image: banner01,
    title: 'A Special espresso machine THIS WEEK',
    description:
      'Get one of three type of espresso machine from Bialetti, take the discount up to 30%',
  },
  {
    id: 1,
    image: banner02,
    title: 'A Special espresso machine THIS WEEK',
    description:
      'Get one of three type of espresso machine from Bialetti, take the discount up to 30%',
  },
  {
    id: 2,
    image: banner03,
    title: 'Get ready New coffee maker THIS WEEK',
    description: 'New coffee maker from Bialetti, check it now to get the discount up to 30%',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="max-h-[800px] relative">
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3550] flex items-center justify-center text-[#F2F2F2] z-10">
          <div className="flex flex-col items-center justify-center px-6">
            <p className="uppercase text-sm md:text-base font-semibold font-poppins mb-4 text-center">
              what’s news
            </p>
            <p className="uppercase text-xl md:text-2xl font-bold mb-4 text-center">
              espresso machine special deal this august
            </p>
            <p className="text-base md:text-base font-poppins font-semibold mb-11 max-w-[524px] text-center">
              At August if you buy any espresso machines from Bialetti you will have a discount up
              to 50%
            </p>
            <Link href="/shop/coffee-machine">
              <button
                type="button"
                className="bg-[#F2F2F2] hover:bg-[#e9e9e9] text-textPrimary px-14 py-4 rounded-md uppercase transition duration-150"
              >
                Buy now
              </button>
            </Link>
          </div>
        </div>
        <SlideBanner banners={banners} images={images} />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full my-16 md:my-[160px]">
        <HomeCategory />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full grid md:grid-cols-2 gap-x-5 mb-16 md:mb-[160px]">
        <HomeEmail />
      </div>
      <div className="max-h-[600px] min-h-[500px] relative mb-16 md:mb-[160px]">
        <HomeContact />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[160px]">
        <HomeBestSeller />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[160px]">
        <HomeBlog />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full mb-16 md:mb-[160px]">
        <HomeClient />
      </div>
    </Layout>
  );
}
