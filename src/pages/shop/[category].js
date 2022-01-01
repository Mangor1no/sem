import { Listbox, Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import Category from 'components/shop/Category';
import Filter from 'components/shop/Filter';
import Product from 'components/shop/Product';
import { IconDropdown, IconPaginateNext, IconPaginatePrev, IconPriceRange } from 'constants/Icons';
import { categories, food, baristaTools, coffeeBeans } from 'data/constants';
import { useRouter } from 'next/router';
import banner from 'public/images/allmachines.jpg';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { chunk } from 'utils/helpers';

const Shop = () => {
  const router = useRouter();
  const { query } = router;

  const sortFilter = [
    {
      id: 0,
      name: 'Low to high',
    },
    {
      id: 1,
      name: 'High to low',
    },
    {
      id: 2,
      name: 'A - Z',
    },
    {
      id: 3,
      name: 'Z - A',
    },
  ];

  const [currentCategory, setCurrentCategory] = useState('coffee-machine');
  const [currentSubCategory, setCurrentSubCategory] = useState('all-machines');
  const [currentSubCategorySlug, setCurrentSubCategorySlug] = useState('all-machines');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterColor, setFilterColor] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPriceRange, setFilterPriceRange] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current;
    if (query?.type) {
      current = categories
        .filter((cat) => cat.category === query.category)?.[0]
        ?.subCategory?.filter((subCat) => subCat.slug === query?.type)[0];
    } else {
      current = categories.filter((cat) => cat.category === query.category)[0]?.subCategory?.[0];
    }
    if (!current) {
      // router.push('/404');
    } else {
      if (query?.category) {
        setCurrentCategory(query?.category);
      }
      setCurrentSubCategory(current?.name);
      setCurrentSubCategorySlug(current?.slug);
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
      data = baristaTools;
    }
    if (currentCategory === categories?.[2]?.category) {
      data = coffeeBeans;
    }
    setProducts(data);
    setFilteredProducts(data);
  }, [currentCategory]);

  useEffect(() => {
    let tempProd = [...products];
    setCurrentPage(0);

    if (
      currentSubCategorySlug !== 'all-machines' &&
      currentSubCategorySlug !== 'all-tools' &&
      currentSubCategorySlug !== 'all-beans-types'
    ) {
      tempProd = tempProd.filter((prod) => {
        return prod.subCategory === currentSubCategorySlug;
      });
    } else {
      tempProd = [...products];
    }

    if (filterBrand.length > 0) {
      tempProd = filterBrand
        ?.map((select) => tempProd.filter((prod) => prod.brand === select))
        .flat();
    }

    if (filterColor.length > 0) {
      tempProd = [
        ...new Set(
          filterColor
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
  }, [selected, filterColor, filterBrand, filterPriceRange, products, currentSubCategorySlug]);

  const handleSelectCategory = (subCategory, subCategorySlug, category) => {
    setCurrentSubCategory(subCategory);
    setCurrentSubCategorySlug(subCategorySlug);
    setCurrentCategory(category);
  };

  const handlePageClick = async (page) => {
    await setCurrentPage(page.selected);
  };

  const handleFilter = ({ selectedColor, selectedBrand, selectedPriceRange }) => {
    setFilterColor(selectedColor);
    setFilterBrand(selectedBrand);
    setFilterPriceRange(selectedPriceRange);
  };

  const renderProducts = useCallback(() => {
    const chunks = chunk(filteredProducts, 12);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5">
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
      <div className="h-[500px] min-h-[500px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">{currentSubCategory}</p>
        </div>
      </div>
      <div className="py-16 px-6 lg:px-[80px] xl:px-40 2xl:px-[255px] shop-main">
        <div
          className="flex justify-between bg-white px-16 py-16 rounded-md"
          style={{ boxShadow: '6px 12px 61px rgba(43, 43, 53, 0.05)' }}
        >
          <div className="hidden md:block max-w-[262px] w-full mr-6">
            <Category
              currentSubCategory={currentSubCategory}
              handleSelectCategory={handleSelectCategory}
            />
            <div className="mt-11">
              <Filter handleFilter={handleFilter} products={products} />
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex items-center font-poppins mb-[30px]">
              <Listbox value={selected} onChange={setSelected} className="relative w-[172px] z-20">
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full px-4 py-2 text-left bg-white border border-[#DCDDDE] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm flex items-center justify-between">
                    <span className="block truncate">
                      {selected ? selected.name : 'Select products'}
                    </span>
                    <span>
                      <IconDropdown />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full overflow-auto text-base bg-white max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {sortFilter?.map((filter, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-pointer select-none relative px-4 py-2 border border-[#DCDDDE] border-t-0 hover:bg-gray-50 focus:outline-none`
                          }
                          value={filter}
                        >
                          {/* eslint-disable-next-line no-shadow */}
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                              >
                                {filter.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                />
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            {renderProducts()}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-end mt-24 mb-64">
                <ReactPaginate
                  previousLabel={<IconPaginatePrev active={currentPage !== 0} />}
                  nextLabel={<IconPaginateNext active={currentPage !== pageCount - 1} />}
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={Math.ceil(filteredProducts.length / 12)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName="flex flex-row items-center text-sm font-poppins font-semibold"
                  activeClassName="bg-primary box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
                  activeLinkClassName="text-white"
                  pageClassName="box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
                  nextClassName={currentPage !== 0 ? 'ml-[24px]' : 'ml-[12px]'}
                  previousClassName={currentPage !== pageCount - 1 ? 'mr-[24px]' : 'mr-[12px]'}
                />
              </div>
            )}
            <div className="flex flex-col items-center justify-center">
              <p className="uppercase text-lg font-semibold mb-4">related products</p>
              <div className="flex items-center justify-between mb-5">
                <div className="w-[90px] h-[2px] bg-primary mr-1" />
                <IconPriceRange />
                <div className="w-[90px] h-[2px] bg-primary ml-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5">
                {products?.slice(0, 6)?.map((product) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
