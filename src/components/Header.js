/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Menu, Transition } from '@headlessui/react';
import { IconCart, IconClose, IconSearch, IconUser, IconWishlist } from 'constants/Icons';
import { signOut } from 'data/actions/users';
import { categories, clothes, food, medicine, toy } from 'data/constants';
import { isAuthSelector } from 'data/selectors/userSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BurgerButton from './header/burger';

const data = [...food, ...toy, ...clothes, ...medicine];

const Header = () => {
  const [className, setClassName] = useState('');
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  console.log('🚀 ===== searchItems', searchItems);

  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);

  const router = useRouter();

  useEffect(() => {
    setClassName('#45A7DE');
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
    <div className="relative">
      <Transition
        show={toggleSearch}
        appear
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-40  w-screen h-screen"
      >
        <div className="flex">
          <div className="fixed inset-0 bg-[#000000] opacity-40" />
          <div className="w-full bg-white pt-[97px] pb-[70px] px-10 md:px-40 xl:px-[370px] z-10">
            <div className="flex items-center">
              <input
                type="text"
                className="border-2 border-blue-100 w-full focus:outline-none px-8 py-5 text-blue-100 pr-[70px] placeholder-blue-100"
                onChange={(e) => handleFilter(e.target.value)}
                placeholder="Search Entire Store..."
              />
              <button type="button" className="bg-blue-100 text-white p-5 border-2 border-blue-100">
                <IconSearch />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              {searchItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between hover:bg-yellow-50 hover:text-blue-100 rounded-md pr-4"
                >
                  <div className="flex items-center space-x-5">
                    <img src={item.image[0]} alt={item.name} className="w-24 h-24 rounded-md" />
                    <p>{item.name}</p>
                  </div>
                  <p className="font-bold">${item.price}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setToggleSearch(!toggleSearch)}
              className="absolute top-0 right-0 bg-blue-100 text-white p-3 border-2 border-blue-100"
            >
              <IconClose />
            </button>
          </div>
        </div>
      </Transition>
      <div
        style={{ backgroundColor: className }}
        className="fixed top-0 flex items-center justify-between lg:justify-center px-4 sm:px-20 pt-[25px] pb-[16px] text-white w-full z-20 bg-transparent"
      >
        <img src="/images/logo.png" alt="logo" className="w-[70px] max-w-[70px]" />
        <div className="hidden lg:flex items-center justify-between 2xl:ml-60">
          <div className="flex items-center justify-between space-x-[45px]">
            <div className="flex items-center justify-between group relative" />
            <Link href="/">
              <a className="font-bold min-w-max hover:text-yellow-100 transition duration-150">
                HOME
              </a>
            </Link>
            <Link href="/about">
              <a className="font-bold min-w-max hover:text-yellow-100 transition duration-150">
                ABOUT US
              </a>
            </Link>
            <Link href="/service">
              <a className="font-bold min-w-max hover:text-yellow-100 transition duration-150">
                SERVICE
              </a>
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="font-bold min-w-max hover:text-yellow-100 transition duration-150 inline-flex justify-center w-full text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  PRODUCT
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -left-10 w-56 mt-2 origin-top-right overflow-hidden bg-white divide-y divide-[#C9C9C9] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {categories.map((category) => (
                    <div className="" key={category.id}>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={`/shop/${category.category}`}>
                            <button
                              type="button"
                              className={`${
                                active ? 'bg-[#ECECEF] text-blue-100' : 'text-gray-900'
                              } group flex items-center w-full px-8 py-3 text-sm`}
                            >
                              {category.name}
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <Link href="/blog">
              <a className="font-bold min-w-max hover:text-yellow-100 transition duration-150">
                BLOG
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-between ml-16 2xl:ml-[227px] space-x-5">
            <div className="relative min-w-5 h-5 hover:text-yellow-100">
              <button type="button" onClick={() => setToggleSearch(!toggleSearch)}>
                <IconSearch />
              </button>
            </div>
            <div className="relative min-w-5 h-5 hover:text-yellow-100">
              {isAuth ? (
                <Link href="/profile">
                  <a className="font-bold min-w-max">
                    <IconUser />
                  </a>
                </Link>
              ) : (
                <Link href="/auth/login">
                  <a className="font-bold min-w-max">
                    <IconUser />
                  </a>
                </Link>
              )}
            </div>
            <div className="relative min-w-5 h-5 hover:text-yellow-100">
              {isAuth ? (
                <Link href="/profile/wishlist">
                  <a className="font-bold min-w-max">
                    <IconWishlist />
                  </a>
                </Link>
              ) : (
                <Link href="/auth/login">
                  <a className="font-bold min-w-max">
                    <IconWishlist />
                  </a>
                </Link>
              )}
            </div>
            <div className="relative min-w-5 h-5 hover:text-yellow-100">
              <Link href="/cart">
                <a className="font-bold min-w-max">
                  <IconCart />
                </a>
              </Link>
            </div>
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
    </div>
  );
};

export default Header;
