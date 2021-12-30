import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { categories, coffeeMachines, baristaTools, coffeeBeans } from 'data/constants';
import Layout from 'components/Layout';
import { ImageSlider } from 'components/product-detail/ImageSlider';
import ProductInfo from 'components/product-detail/ProductInfo';
import ProductMetadata from 'components/product-detail/ProductMetadata';
import { IconPriceRange } from 'constants/Icons';
import { Transition } from '@headlessui/react';
import Product from 'components/shop/Product';

const ProductDetail = () => {
  const { query } = useRouter();
  const [currentData, setCurrentData] = useState(null);
  // const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const setData = async (category) => {
    let data;
    if (category === categories?.[0]?.category) {
      data = coffeeMachines;
    }
    if (category === categories?.[1]?.category) {
      data = baristaTools;
    }
    if (category === categories?.[2]?.category) {
      data = coffeeBeans;
    }
    await setCurrentData(data);
    setLoading(false);
  };

  useEffect(() => {
    const { category } = query;
    setData(category);
  }, [query]);

  useEffect(() => {
    const { product } = query;
    if (currentData) {
      // eslint-disable-next-line eqeqeq
      setSelectedProduct(currentData.filter((data) => data?.id == product)?.[0]);
    }
  }, [currentData, query]);

  const renderNavLink = () => {
    return (
      <p className="font-poppins text-sm uppercase mb-10">
        home / shop /{' '}
        {categories.filter((cat) => cat?.category === selectedProduct?.category)?.[0]?.name} /{' '}
        {
          categories.map(
            (cat) =>
              cat?.subCategory.filter((subCat) => subCat.slug === selectedProduct?.subCategory)?.[0]
                ?.name
          )?.[0]
        }
      </p>
    );
  };

  if (loading) return null;

  return (
    <Layout>
      <div className="py-16 px-6 lg:px-[80px] xl:px-40 2xl:px-[255px] mt-24">
        <div
          className="flex flex-col bg-white px-4 md:px-16 py-16 rounded-md"
          style={{ boxShadow: '6px 12px 61px rgba(43, 43, 53, 0.05)' }}
        >
          {renderNavLink()}
          <div className="flex flex-col md:flex-row md:mb-20">
            <div className="md:w-1/2">
              <ImageSlider banners={selectedProduct?.image} />
            </div>
            <div className="md:w-1/2 md:ml-8 lg:ml-10 xl:ml-16 2xl:ml-32">
              <ProductInfo info={selectedProduct} />
            </div>
          </div>
          <ProductMetadata type={query?.category} metadata={selectedProduct?.metadata} />
          <div className="flex flex-col items-center justify-center mt-44">
            <p className="uppercase text-lg font-semibold mb-4">related products</p>
            <div className="flex items-center justify-between mb-5">
              <div className="w-[90px] h-[2px] bg-primary mr-1" />
              <IconPriceRange />
              <div className="w-[90px] h-[2px] bg-primary ml-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-5">
              {currentData &&
                currentData.length &&
                currentData?.slice(0, 4)?.map((product, index) => (
                  <Transition
                    as="div"
                    key={index}
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
      </div>
    </Layout>
  );
};

export default ProductDetail;
