import { Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import { ImageSlider } from 'components/product-detail/ImageSlider';
import ProductInfo from 'components/product-detail/ProductInfo';
import ProductMetadata from 'components/product-detail/ProductMetadata';
import Product from 'components/shop/Product';
import { categories, clothes, comestic, food, medicine, toy } from 'data/constants';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { query } = useRouter();
  const [currentData, setCurrentData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const setData = async (category) => {
    let data;
    if (category === categories?.[0]?.category) {
      data = food;
    }
    if (category === categories?.[1]?.category) {
      data = clothes;
    }
    if (category === categories?.[2]?.category) {
      data = medicine;
    }
    if (category === categories?.[3]?.category) {
      data = comestic;
    }
    if (category === categories?.[4]?.category) {
      data = toy;
    }
    await setCurrentData(data);
    setLoading(false);
  };

  useEffect(() => {
    const { category } = query;
    setData(category?.toLowerCase());
  }, [query]);

  useEffect(() => {
    const { product } = query;
    if (currentData) {
      // eslint-disable-next-line eqeqeq
      setSelectedProduct(currentData.filter((data) => data?.id == product)?.[0]);
    }
  }, [currentData, query]);

  if (loading) return null;

  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        {/* <img src={banner} alt="banner" className="h-full w-full object-cover" /> */}
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">Products</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">Product</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="py-28 px-6 lg:px-32 xl:px-60 2xl:px-[370px]">
        <div className="flex flex-col md:flex-row md:mb-20">
          <div className="md:w-1/2">
            <ImageSlider banners={selectedProduct?.image} />
          </div>
          <div className="md:w-1/2 md:ml-8 lg:ml-10 xl:ml-16">
            <ProductInfo info={selectedProduct} />
            <ProductMetadata
              type={query?.category}
              metadata={selectedProduct?.metadata}
              product={selectedProduct}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
            BEST PRODUCT
          </p>
          <p className="text-lg md:text-2xl font-bold mb-16">Realated Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-5">
            {currentData?.slice(0, 4)?.map((product) => (
              <Transition
                as="div"
                key={product.id}
                show
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <Product product={product} />
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
