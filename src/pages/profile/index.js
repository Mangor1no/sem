/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Layout from 'components/Layout';
import Support from 'components/Support';
import { IconEdit } from 'constants/Icons';
import { changeUserInfo, changeUserPassword, signOut } from 'data/actions/users';
import { categories, clothes, comestic, food, medicine, toy } from 'data/constants';
import { cartItemSelector } from 'data/selectors/cartSelector';
import {
  currentProfileSelector,
  isAuthSelector,
  profileDataSelector,
} from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';
import { validateEmail } from 'utils/helpers';

const Account = () => {
  const tabs = ['overview', 'orders', 'address', 'Account Details'];

  const router = useRouter();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);
  const currentProfile = useSelector(currentProfileSelector);
  const currentProfileData = useSelector(profileDataSelector)?.filter(
    (profile) => profile?.id === currentProfile?.id
  )?.[0];
  const wishlist = useSelector(wishlistSelector);
  const cartList = useSelector(cartItemSelector);

  useEffect(() => {
    if (!isAuth) router.push('/');
  }, [isAuth]);

  useEffect(() => {
    setErrors(null);
  }, [activeTab]);

  const getProductDetail = (pId, type) => {
    let data;
    let productImage = null;
    let productName = null;
    let productPrice = null;
    if (type.toLowerCase() === categories?.[0]?.category) {
      data = food;
    }
    if (type.toLowerCase() === categories?.[1]?.category) {
      data = clothes;
    }
    if (type.toLowerCase() === categories?.[2]?.category) {
      data = medicine;
    }
    if (type.toLowerCase() === categories?.[3]?.category) {
      data = comestic;
    }
    if (type.toLowerCase() === categories?.[4]?.category) {
      data = toy;
    }
    productName = data.filter((item) => item.id === pId)?.[0]?.name;
    productImage = data.filter((item) => item.id === pId)?.[0]?.image?.[0];
    productPrice = data.filter((item) => item.id === pId)?.[0]?.price;
    return { productImage, productName, productPrice };
  };

  const handleChangeUserInfo = async () => {
    if (fname.trim().length === 0) {
      return setErrors({ fname: true });
    }
    if (lname.trim().length === 0) {
      return setErrors({ lname: true });
    }
    if (email.trim().length === 0 || !validateEmail(email)) {
      return setErrors({ email: true });
    }
    if (currentProfile.password !== oldPassword || oldPassword.trim().length === 0) {
      return setErrors({ oldPassword: true });
    }
    if (password.trim().length < 6) {
      return setErrors({ password: true });
    }
    if (rePassword !== password) {
      return setErrors({ rePassword: true });
    }
    await dispatch(changeUserPassword(password));
    await dispatch(
      changeUserInfo({
        fname,
        lname,
        email,
      })
    );
    setErrors(null);
    return toast('Your information has been updated successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
    router.push('/');
  };

  const renderProfile = () => {
    switch (activeTab) {
      case tabs[0]:
        return (
          <>
            <p>Overview</p>
            <p>
              Hello, <span className="text-blue-100">{currentProfileData.username}</span> (If Not{' '}
              <span className="text-blue-100">{currentProfileData.username}</span>?{' '}
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
              )
            </p>
            <p>
              From your account dashboard. you can easily check & view your recent orders, manage
              your shipping and billing addresses and edit your password and account details.
            </p>
          </>
        );
      case tabs[1]:
        return (
          <div className="overflow-x-auto">
            <p className="text-lg mb-4">Orders</p>
            <table className="font-neue">
              <tbody>
                <tr>
                  <td className="px-[38px] py-4">Order</td>
                  <td className="px-[101px]">Date</td>
                  <td className="px-[83px]">Status</td>
                  <td className="px-[40px]">Total</td>
                  <td className="px-[35px]">Action</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">1</td>
                  <td className="text-black-50">Aug 24, 2021</td>
                  <td className="text-black-50">Approved</td>
                  <td className="text-black-50">$3000</td>
                  <td className="text-black-50">
                    <Link href="/profile/order">
                      <a>View</a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">2</td>
                  <td className="text-black-50">Aug 23, 2021</td>
                  <td className="text-black-50">Pending</td>
                  <td className="text-black-50">$200</td>
                  <td className="text-black-50">
                    <Link href="/profile/order">
                      <a>View</a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">3</td>
                  <td className="text-black-50">Aug 12, 2021</td>
                  <td className="text-black-50">On Hold</td>
                  <td className="text-black-50">$420</td>
                  <td className="text-black-50">
                    <Link href="/profile/order">
                      <a>View</a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">4</td>
                  <td className="text-black-50">June 12, 2021</td>
                  <td className="text-black-50">Approved</td>
                  <td className="text-black-50">$990</td>
                  <td className="text-black-50">
                    <Link href="/profile/order">
                      <a>View</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case tabs[2]:
        return (
          <div className="text-base">
            <p className="text-lg mb-4 border-b border-dashed border-black-10 pb-[10px]">
              Billing Address
            </p>
            <p className="font-bold font-neue mt-[26px] mb-[22px]">Alex Tuntuni</p>
            <p className="mb-[18px]">
              1355 Market St, Suite 900 <br /> San Francisco, CA 94103
            </p>
            <p className="mb-11">Mobile: (123) 456-7890</p>
            <button type="button" className="flex items-center space-x-1">
              <IconEdit /> <span>Edit Address</span>
            </button>
          </div>
        );
      case tabs[3]:
        return (
          <>
            <p className="text-lg mb-4 border-b border-dashed border-black-10 pb-[10px]">
              Account Details
            </p>
            <div className="flex flex-col space-y-6 my-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <p className="text-base mb-2 capitalize">First Name</p>
                  <input
                    type="text"
                    className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  {errors?.fname && (
                    <p className="text-xs text-red-600">First name must not be blank</p>
                  )}
                </div>
                <div>
                  <p className="text-base mb-2 capitalize">Last name</p>
                  <input
                    type="text"
                    className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                    name="lname"
                    id="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                  {errors?.lname && (
                    <p className="text-xs text-red-600">Last name must not be blank</p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-base mb-2 capitalize">Email Address</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && <p className="text-xs text-red-600">Email is not correct</p>}
              </div>
              <p className="border-b border-black-10 font-bold text-base font-neue pb-[10px]">
                Password change
              </p>
              <div>
                <p className="text-base mb-2 capitalize">Current Password</p>
                <input
                  type="password"
                  className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                  name="oldPassword"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {errors?.oldPassword && (
                  <p className="text-xs text-red-600">Old password is not correct</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <p className="text-base mb-2 capitalize">New Password</p>
                  <input
                    type="password"
                    className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors?.password && (
                    <p className="text-xs text-red-600">Password must be more than 6 characters</p>
                  )}
                </div>
                <div>
                  <p className="text-base mb-2 capitalize">Confirm Password</p>
                  <input
                    type="password"
                    className="border border-[#B1B1B1] text-sm px-3 py-4 w-full focus:outline-none disabled:bg-disabled"
                    name="rePassword"
                    id="rePassword"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  {errors?.rePassword && (
                    <p className="text-xs text-red-600">
                      Confirm password must be the same as new password
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="bg-primary px-11 py-3 font-bold uppercase text-white"
              onClick={handleChangeUserInfo}
            >
              Save changes
            </button>
          </>
        );
      default:
        return null;
    }
  };

  if (!isAuth) return null;

  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">Account</p>
            <p className="uppercase text-base font-neue">
              HOME <span className="text-blue-100">//ACCOUNT</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="my-28 px-6 md:px-32 xl:px-60 2xl:px-[370px]">
        <div className="flex space-x-[30px]">
          <div className="w-1/4 min-w-[140px] lg:min-w-[273px]">
            <ul className="-mr-px border border-black-10 divide-y divide-black-10">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-4 flex items-center cursor-pointer ${
                    activeTab === tab && 'bg-blue-100 text-white'
                  }`}
                >
                  <span className="block capitalize">{tab}</span>
                </li>
              ))}
              <li className="p-4 flex items-center cursor-pointer" onClick={handleSignOut}>
                <span className="block capitalize">Logout</span>
              </li>
            </ul>
          </div>
          <div className="mb-28 w-3/4 border border-black-10 p-9">{renderProfile()}</div>
        </div>
        <div
          className={`${
            activeTab === tabs[0] ? 'grid' : 'hidden'
          } grid-cols-1 xl:grid-cols-2 w-full gap-16 mt-[100px]`}
        >
          <div className="border border-black-10 p-9 min-h-[330px]">
            <p className="text-lg mb-5">Account Details:</p>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <p>First name:</p>
                <p>{currentProfileData.fname}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p>Last name:</p>
                <p>{currentProfileData.lname}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p>Display name:</p>
                <p>{currentProfileData.username}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p>Email:</p>
                <p>{currentProfileData.email}</p>
              </div>
            </div>
          </div>
          <div className="border border-black-10 p-9 min-h-[330px]">
            <div className="flex items-center justify-between mb-9">
              <p className="text-lg">Cart:</p>
              <Link href="/cart">
                <a>View all ({cartList?.length})</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-11">
              {cartList.map((item, index) => {
                const { productImage, productName, productPrice } = getProductDetail(
                  item.productId,
                  item.productCategory
                );
                return (
                  <div className="flex items-center gap-x-14" key={index}>
                    <img src={productImage} alt={productName} className="w-16 h-16 min-w-[64px]" />
                    <div>
                      <p>{productName}</p>
                      <p>
                        {item.quantity} x ${productPrice}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`${
            activeTab === tabs[0] ? 'grid' : 'hidden'
          } grid-cols-1 xl:grid-cols-2 w-full gap-16 mt-[100px]`}
        >
          <div className="border border-black-10 p-9 min-h-[330px]">
            <div className="flex items-center justify-between mb-9">
              <p className="text-lg">Address</p>
              <button type="button" onClick={() => {}}>
                Edit
              </button>
            </div>
            <p className="font-bold font-neue mt-[26px] mb-[22px]">Alex Tuntuni</p>
            <p className="mb-[18px]">
              1355 Market St, Suite 900 <br /> San Francisco, CA 94103
            </p>
            <p className="mb-11">Mobile: (123) 456-7890</p>
          </div>
          <div className="border border-black-10 p-9 min-h-[330px]">
            <div className="flex items-center justify-between mb-9">
              <p className="text-lg">Wishlist</p>
              <Link href="/cart">
                <a>View all ({wishlist?.length})</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-11">
              {wishlist.map((item, index) => {
                return (
                  <div className="flex items-center gap-x-14" key={index}>
                    <img src={item.image[0]} alt={item.name} className="w-16 h-16 min-w-[64px]" />
                    <div>
                      <p>{item.name}</p>
                      <p>1 x ${item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-6 md:px-32 xl:px-60 2xl:px-[370px] border-t border-black-10">
        <Support />
      </div>
    </Layout>
  );
};

export default Account;
