import HomeBestDeal from 'components/home/HomeBestDeal';
import HomeBestProduct from 'components/home/HomeBestProduct';
import HomeBestSeller from 'components/home/HomeBestSeller';
import HomeBlog from 'components/home/HomeBlog';
import HomeCategory from 'components/home/HomeCategory';
import HomeFlashDeal from 'components/home/HomeFlashDeal';
import HomeSale from 'components/home/HomeSale';
import { SlideBanner } from 'components/home/SlideBanner';
import Layout from 'components/Layout';
import banner01 from 'public/images/home/banner.png';
import banner02 from 'public/images/home/banner-2.png';

const images = [banner01, banner02];

const banners = [
  {
    id: 0,
    image: banner01,
    title: 'A Greate Meal \n With Your Pet',
    background: '#45A7DE',
  },
  {
    id: 1,
    image: banner02,
    title: 'Best food \n for your pet',
    background: '#FFD868',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non felis, id amet risus pellentesque fermentum. Augue ultricies.',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full relative min-h-[600px] lg:min-h-[900px] bg-blue-100 flex items-center justify-center text-[#F2F2F2] z-10">
        <SlideBanner banners={banners} images={images} />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[370px] w-full py-16 md:pt-[50px] md:pb-[86px] bg-black-2">
        <HomeCategory />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[370px] w-full my-16 md:mb-[114px] md:mt-[146px]">
        <HomeSale />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[370px] w-full mb-16 md:mb-[160px]">
        <HomeBestSeller />
      </div>
      <div className="max-h-[600px] md:min-h-[500px] relative">
        <HomeBestDeal />
      </div>
      <div className="px-5 sm:px-16 w-full mb-16 md:mb-20 bg-black-2">
        <HomeFlashDeal />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[370px] w-full mb-16 md:mb-[200px]">
        <HomeBestProduct />
      </div>
      <div className="px-5 sm:px-16 xl:px-[150px] 2xl:px-[370px] w-full mb-16 md:mb-[160px]">
        <HomeBlog />
      </div>
    </Layout>
  );
}
