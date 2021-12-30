/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Popover, Transition } from '@headlessui/react';
import { IconCart, IconNavDropdown, IconSearch, IconUser } from 'constants/Icons';
import { signOut } from 'data/actions/users';
import { isAuthSelector } from 'data/selectors/userSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'utils/customHooks';
import { coffeeMachines, coffeeBeans, baristaTools } from 'data/constants';
import BurgerButton from './header/burger';

const data = [...coffeeMachines, ...coffeeBeans, ...baristaTools];

const Header = () => {
  const [className, setClassName] = useState('');
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [searchItems, setSearchItems] = useState([]);

  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);

  const router = useRouter();

  const { width } = useWindowSize();

  const handleScroll = () => {
    if (width > 786) {
      if (window.pageYOffset > 250) {
        if (!className) {
          setClassName('#212227');
        }
      } else {
        setClassName('');
      }
    } else if (window.pageYOffset > 30) {
      if (!className) {
        setClassName('#212227');
      }
    } else {
      setClassName('');
    }
  };

  useEffect(() => {
    if (
      router?.route === '/' ||
      (router?.route.includes('/shop') && !router?.route.includes('/shop/product')) ||
      router?.route === '/cart' ||
      router?.route === '/blog' ||
      router?.route.includes('/service')
    ) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setClassName('#212227');
    }
  }, [router?.route]);

  const handleSignOut = async () => {
    await dispatch(signOut());
    router.push('/');
  };

  const handleFilter = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    if (search.trim().length > 0) {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredData.length > 0) {
        setSearchItems(filteredData);
      } else {
        setSearchItems([]);
      }
    } else {
      setSearchItems([]);
    }
  }, [search]);

  return (
    <div
      style={{ backgroundColor: className }}
      className="fixed top-0 flex items-center justify-between sm:px-20 py-5 text-white w-full z-30 bg-transparent transition duration-500 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/images/logo.png" className="px-3 cursor-pointer" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="mr-[50px] flex items-center justify-between group relative">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="mr-2">SHOP</span>
                    <IconNavDropdown />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      className={`absolute z-10 px-4 mt-3 sm:px-0 transform ${
                        toggleSearch
                          ? 'lg:left-0 lg:-translate-x-40 xl:left-1/3 xl:-translate-x-1/3 2xl:-translate-x-1/4 2xl:left-1/4 lg:w-[1000px] xl:w-[1100px] 2xl:w-[1300px]'
                          : 'lg:left-0 lg:-translate-x-1/4 xl:left-2/3 xl:-translate-x-1/2 2xl:-translate-x-1/3 2xl:left-1/3 lg:w-[1000px] xl:w-[1100px] 2xl:w-[1300px]'
                      }`}
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-5 gap-x-7 bg-white px-7 py-10 text-textPrimary">
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">TOP BRAND</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/shop/coffee-machine">
                                <a className="mb-[10px] hover:text-primary">Bialetti</a>
                              </Link>
                              <Link href="/shop/coffee-machine">
                                <a className="mb-[10px] hover:text-primary">Breville</a>
                              </Link>
                              <Link href="/shop/coffee-machine">
                                <a className="mb-[10px] hover:text-primary">Delonghi</a>
                              </Link>
                              <Link href="/shop/coffee-machine">
                                <a className="mb-[10px] hover:text-primary">Nespresso</a>
                              </Link>
                              <Link href="/shop/coffee-machine">
                                <a className="hover:text-primary">See More</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">Coffee Machine</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/shop/coffee-machine?type=coffee-grinder">
                                <a className="mb-[10px] hover:text-primary">Coffee Grinder</a>
                              </Link>
                              <Link href="/shop/coffee-machine?type=coffee-maker">
                                <a className="mb-[10px] hover:text-primary">Coffee Maker</a>
                              </Link>
                              <Link href="/shop/coffee-machine?type=coffee-roaster">
                                <a className="mb-[10px] hover:text-primary">Coffee Roaster</a>
                              </Link>
                              <Link href="/shop/coffee-machine?type=espresso-machine">
                                <a className="mb-[10px] hover:text-primary">Espresso Machine</a>
                              </Link>
                              <Link href="/shop/coffee-machine?type=fully-automatic">
                                <a className="hover:text-primary">Fully Automatic</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">barista tools</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/shop/barista-tools?type=cups-and-mugs">
                                <a className="mb-[10px] hover:text-primary">Cups & Mugs</a>
                              </Link>
                              <Link href="/shop/barista-tools?type=scales">
                                <a className="mb-[10px] hover:text-primary">Scales & Spoons</a>
                              </Link>
                              <Link href="/shop/barista-tools?type=servers">
                                <a className="mb-[10px] hover:text-primary">Servers & Storages</a>
                              </Link>
                              <Link href="/shop/barista-tools?type=tampers-and-mats">
                                <a className="mb-[10px] hover:text-primary">Tampers & Mats</a>
                              </Link>
                              <Link href="/shop/barista-tools?type=thermormeters">
                                <a className="hover:text-primary">Thermormeter</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">Coffee beanS</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/shop/coffee-beans?type=capsules">
                                <a className="mb-[10px] hover:text-primary">Capsules</a>
                              </Link>
                              <Link href="/shop/coffee-beans?type=ground">
                                <a className="mb-[10px] hover:text-primary">Ground</a>
                              </Link>
                              <Link href="/shop/coffee-beans?type=roasted">
                                <a className="mb-[10px] hover:text-primary">Roasted</a>
                              </Link>
                              <Link href="/shop/coffee-beans?type=whole-beans">
                                <a className="mb-[10px] hover:text-primary">Whole beans</a>
                              </Link>
                              <Link href="/shop/coffee-beans">
                                <a className="hover:text-primary">All beans</a>
                              </Link>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/coffee-machine-1.png"
                              alt=""
                              className="w-48 h-48 min-w-[192px]"
                            />
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <Link href="/blog">
            <a className="mr-[50px]">BLOG</a>
          </Link>
          <Link href="/service">
            <a className="mr-[50px]">SERVICES</a>
          </Link>
          <Link href="/contact">
            <a className="mr-[50px]">CONTACT</a>
          </Link>
          <div className="mr-[50px] flex items-center justify-between group relative">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } text-white group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="mr-2">MORE</span>
                    <IconNavDropdown />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid bg-white p-7 py-5 text-textPrimary">
                          <div className="font-poppins text-sm flex flex-col justify-center">
                            <Link href="/">
                              <a className="mb-[10px] hover:text-primary">About us</a>
                            </Link>
                            <Link href="/">
                              <a className="mb-[10px] hover:text-primary">News</a>
                            </Link>
                            <Link href="/">
                              <a className="hover:text-primary">Locations</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
        <div className="flex items-center justify-between 2xl:ml-[200px] 3xl:ml-[280px]">
          <div className="mr-[50px]">
            <div className="relative min-w-5 h-5">
              <Transition
                as={Fragment}
                show={toggleSearch}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <input
                  type="text"
                  className="bg-transparent border-white border-b text-white focus:outline-none pr-6 font-poppins pb-1 text-sm"
                  onChange={(e) => handleFilter(e.target.value)}
                />
              </Transition>
              <button
                type="button"
                onClick={() => setToggleSearch(!toggleSearch)}
                className="absolute top-0 right-0"
              >
                <IconSearch />
              </button>
              <div>
                <Transition
                  as={Fragment}
                  show={searchItems.length > 0}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid bg-white px-5 text-textPrimary w-[340px] max-h-80 overflow-y-scroll">
                        <div className="font-poppins text-sm flex flex-col justify-center h-full py-7">
                          {searchItems.map((item) => (
                            <Link
                              key={item.id}
                              href={{
                                pathname: `/shop/product/${item?.id}`,
                                query: { category: item?.category },
                              }}
                            >
                              <div className="flex items-center mb-[10px] cursor-pointer group">
                                <img src={item.image?.[0]} alt={item.name} className="w-20 h-20" />
                                <div className="ml-4 text-sm">
                                  <p className="group-hover:text-primary">{item.name}</p>
                                  <p>${item.price}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          <div className="mr-[50px] flex items-center justify-between group relative">
            <Popover className="relative flex justify-center">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } text-white group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <IconUser />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-4 mt-9 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid bg-white p-7 py-5 text-textPrimary">
                          <div className="font-poppins text-sm flex flex-col justify-center">
                            {isAuth ? (
                              <>
                                <Link href="/profile">
                                  <a className="mb-[10px] hover:text-primary">Account</a>
                                </Link>
                                <Link href="/profile">
                                  <a className="mb-[10px] hover:text-primary">Wishlist</a>
                                </Link>
                                <button type="button" className="w-full" onClick={handleSignOut}>
                                  <p className="hover:text-primary">Sign out</p>
                                </button>
                              </>
                            ) : (
                              <Link href="/auth">
                                <a className="hover:text-primary min-w-max">Sign in</a>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <Link href="/cart">
            <a>
              <IconCart />
            </a>
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <div
          className="text-white cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent block outline-none focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
          role="button"
        >
          <BurgerButton navbarOpen={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
