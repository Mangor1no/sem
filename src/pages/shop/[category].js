import { Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import Category from 'components/shop/Category';
import Filter from 'components/shop/Filter';
import Product from 'components/shop/Product';
import { IconPaginateNext, IconPaginatePrev } from 'constants/Icons';
import { categories, clothes, comestic, food, medicine, toy } from 'data/constants';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { chunk } from 'utils/helpers';

const Shop = () => {
  const router = useRouter();
  const { query } = router;
  const [currentCategory, setCurrentCategory] = useState('food');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterVariation, setFilterVariation] = useState([]);
  const [filterPriceRange, setFilterPriceRange] = useState([]);
  const [filterTag, setFilterTag] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchProductName, setSearchProductName] = useState('');

  useEffect(() => {
    let current;
    if (query?.type) {
      current = categories
        .filter((cat) => cat.category === query.category)?.[0]
        ?.subCategory?.filter((subCat) => subCat.slug === query?.type)[0];
    } else {
      current = categories.filter((cat) => cat.category === query.category)?.[0];
    }
    if (!current) {
      // router.push('/404');
    } else {
      if (query?.category) {
        setCurrentCategory(query?.category);
      }
      setPageCount(Math.ceil(products.length / 12));
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    let data;
    if (currentCategory === categories?.[0]?.category) {
      data = food;
    }
    if (currentCategory === categories?.[1]?.category) {
      data = clothes;
    }
    if (currentCategory === categories?.[2]?.category) {
      data = medicine;
    }
    if (currentCategory === categories?.[3]?.category) {
      data = comestic;
    }
    if (currentCategory === categories?.[4]?.category) {
      data = toy;
    }
    setProducts(data);
    setFilteredProducts(data);
  }, [currentCategory]);

  useEffect(() => {
    let tempProd = [...products];
    setCurrentPage(0);
    if (searchProductName.length > 0) {
      tempProd = tempProd.filter((prod) => {
        return prod.name.toLowerCase().includes(searchProductName.toLowerCase());
      });
    } else {
      tempProd = [...products];
    }
    if (filterVariation.length > 0) {
      tempProd = [
        ...new Set(
          filterVariation
            ?.map((select) => tempProd.filter((prod) => prod.variations.includes(select)))
            .flat()
        ),
      ];
    }
    if (filterPriceRange.length > 0) {
      tempProd = tempProd.filter(
        (prod) => prod.price >= filterPriceRange[0] && prod.price <= filterPriceRange[1]
      );
    }
    if (filterTag.length > 0) {
      tempProd = [
        ...new Set(
          filterTag
            ?.map((select) => tempProd.filter((prod) => prod.metadata.form === select))
            .flat()
        ),
      ];
    }
    if (selected) {
      switch (selected.id) {
        case 0: {
          tempProd = tempProd.sort((a, b) => a.price - b.price);
          break;
        }
        case 1: {
          tempProd = tempProd.sort((a, b) => b.price - a.price);
          break;
        }
        case 2: {
          tempProd = tempProd.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }
        case 3: {
          tempProd = tempProd.sort((a, b) => b.name.localeCompare(a.name));
          break;
        }
        default:
          break;
      }
    }
    setFilteredProducts(tempProd);
  }, [selected, filterVariation, filterPriceRange, products, filterTag, searchProductName]);

  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
  };

  const handlePageClick = async (page) => {
    await setCurrentPage(page.selected);
  };

  const handleFilter = ({ selectedVariation, selectedPriceRange, selectedTag, productName }) => {
    setFilterVariation(selectedVariation);
    setFilterPriceRange(selectedPriceRange);
    setFilterTag(selectedTag);
    setSearchProductName(productName);
  };

  const renderProducts = useCallback(() => {
    const chunks = chunk(filteredProducts, 12);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-8">
        {chunks?.[currentPage]?.map((product) => (
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
    );
  }, [currentPage, filteredProducts, currentCategory]);

  if (isLoading) return null;

  return (
    <Layout>
      <div className="h-[560px] min-h-[560px] w-full relative mb-20">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10">
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
      <div className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
        <div className="mb-11 bg-[#ECECEF] px-4 py-3 text-blue-100">
          <span className="text-yellow-100">{filteredProducts.length}</span> Product Found of{' '}
          <span className="text-yellow-100">{products.length}</span>
        </div>

        <div className="flex justify-between">
          <div className="hidden md:flex flex-col max-w-[262px] w-full gap-y-[42px] mr-[30px]">
            <Category
              handleSelectCategory={handleSelectCategory}
              food={food}
              medicine={medicine}
              toy={toy}
              clothes={clothes}
              comestic={comestic}
            />
            <Filter handleFilter={handleFilter} products={products} />
          </div>
          <div className="flex-1 w-full">
            <div className="bg-yellow-100 w-full h-[250px] mb-[42px] relative overflow-hidden flex items-center">
              <div className="px-4 md:px-12 z-10 text-blue-100">
                <p className="text-base font-bold mb-[5px]">-25% Off</p>
                <p className="text-lg font-bold">Pet Food, Medicine</p>
                <p className="text-lg font-bold mb-7">& Shop With Us</p>
                <p className="text-base font-neue underline">SHOP NOW</p>
              </div>
              <img
                src="/images/products/promotion.png"
                alt="promotion"
                className="absolute bottom-0 right-0 max-w-[470px]"
              />
            </div>

            {renderProducts()}
            {filteredProducts.length > 0 && (
              <div className="flex items-center my-24">
                <ReactPaginate
                  previousLabel={
                    pageCount > 1 ? (
                      <div className="border border-blue-100 px-2 py-[8.5px]">
                        <IconPaginatePrev />
                      </div>
                    ) : null
                  }
                  nextLabel={
                    <div className="border border-blue-100 px-2 py-[8.5px]">
                      <IconPaginateNext />
                    </div>
                  }
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={Math.ceil(filteredProducts.length / 12)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName="flex flex-row items-center text-sm font-bold space-x-3"
                  activeClassName="bg-blue-100 box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
                  activeLinkClassName="text-white"
                  pageClassName="box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center border border-blue-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
