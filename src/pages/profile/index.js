/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import Product from 'components/shop/Product';
import Support from 'components/Support';
import { IconChangeAvatar, IconCheckboxCheck, IconWishlist } from 'constants/Icons';
import { changeUserInfo, changeUserPassword, signOut } from 'data/actions/users';
import {
  currentProfileSelector,
  isAuthSelector,
  profileDataSelector,
} from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';
import { validateEmail } from 'utils/helpers';

const Account = () => {
  const tabs = ['overview', 'orders', 'payment method', 'address', 'Account Details', 'Logout'];

  const router = useRouter();

  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState(null);

  const [alertNoti, setAlertNoti] = useState(false);
  const [accountActivity, setAccountActivity] = useState(false);
  const [reply, setReply] = useState(false);

  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);
  const currentProfile = useSelector(currentProfileSelector);
  const currentProfileData = useSelector(profileDataSelector)?.filter(
    (profile) => profile?.id === currentProfile?.id
  )?.[0];
  const wishlist = useSelector(wishlistSelector);

  useEffect(() => {
    if (!isAuth) router.push('/');
  }, [isAuth]);

  useEffect(() => {
    const svg = createAvatar(style, {
      seed: currentProfile.username,
      width: 120,
      height: 120,
      // ... and other options
    });
    setAvatar(svg);
  }, [currentProfile]);

  useEffect(() => {
    setErrors(null);
  }, [activeTab]);

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
    if (phone.trim().length === 0) {
      return setErrors({ phone: true });
    }
    if (location.trim().length === 0) {
      return setErrors({ location: true });
    }
    if (zipcode.trim().length === 0) {
      return setErrors({ zipcode: true });
    }
    await dispatch(
      changeUserInfo({
        fname,
        lname,
        phone,
        email,
        location,
        zipcode,
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

  const handleChangeUserPassword = async () => {
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
    setErrors(null);
    return toast('Your password has been updated successfully', {
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

  const handleToggleAllNoti = () => {
    if (!alertNoti || !accountActivity || !reply) {
      setAccountActivity(true);
      setAlertNoti(true);
      setReply(true);
    }
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
              Hello, <span className="text-blue-100">{currentProfile.username}</span> (If Not{' '}
              <span className="text-blue-100">{currentProfile.username}</span>?{' '}
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
              )
            </p>
            <p>
              From your account dashboard. you can easily check & view your recent orders, manage
              your shipping and billing addresses and edit your password and account details.
            </p>
            {/* <div className="flex items-center mb-14">
              <div className="flex items-center justify-center bg-purple-300 rounded-full w-[150px] h-[150px] relative">
                <div dangerouslySetInnerHTML={{ __html: avatar }} />
                <div className="absolute top-3 right-3">
                  <IconChangeAvatar />
                </div>
              </div>
              <p className="ml-12 font-bold text-base uppercase">
                {currentProfileData?.fname} {currentProfileData?.lname}
              </p>
            </div>
            <div className="">
              <div>
                <p className="text-xs mb-2">First Name</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
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
                <p className="text-xs mb-2">Last name</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  name="lname"
                  id="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                {errors?.lname && (
                  <p className="text-xs text-red-600">Last name must not be blank</p>
                )}
              </div>
              <div>
                <p className="text-xs mb-2">Phone number</p>
                <NumberFormat
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  value={phone}
                  allowNegative={false}
                  onValueChange={({ value }) => {
                    setPhone(value);
                  }}
                />
                {errors?.phone && (
                  <p className="text-xs text-red-600">Phone number must not be blank</p>
                )}
              </div>
              <div>
                <p className="text-xs mb-2">Email</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && <p className="text-xs text-red-600">Email is not correct</p>}
              </div>
              <div>
                <p className="text-xs mb-2">Location</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {errors?.location && (
                  <p className="text-xs text-red-600">Location must not be blank</p>
                )}
              </div>
              <div>
                <p className="text-xs mb-2">Zip code</p>
                <input
                  type="text"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  name="zipcode"
                  id="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
                {errors?.zipcode && (
                  <p className="text-xs text-red-600">Zip code must not be blank</p>
                )}
              </div>
            </div>
            <button
              type="button"
              className="bg-primary px-6 py-3 font-bold  text-white text-sm"
              onClick={handleChangeUserInfo}
            >
              Save changes
            </button> */}
          </>
        );
      case tabs[1]:
        return (
          <div className="overflow-x-auto">
            <p>Orders</p>
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
                  <td className="text-black-50">View</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">2</td>
                  <td className="text-black-50">Aug 23, 2021</td>
                  <td className="text-black-50">Pending</td>
                  <td className="text-black-50">$200</td>
                  <td className="text-black-50">View</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">3</td>
                  <td className="text-black-50">Aug 12, 2021</td>
                  <td className="text-black-50">On Hold</td>
                  <td className="text-black-50">$420</td>
                  <td className="text-black-50">View</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-5 text-black-50">4</td>
                  <td className="text-black-50">June 12, 2021</td>
                  <td className="text-black-50">Approved</td>
                  <td className="text-black-50">$990</td>
                  <td className="text-black-50">View</td>
                </tr>
              </tbody>
            </table>
            {/* <div className="flex items-center mb-14">
              <div className="flex items-center justify-center bg-purple-300 rounded-full w-[150px] h-[150px] relative">
                <div dangerouslySetInnerHTML={{ __html: avatar }} />
                <div className="absolute top-3 right-3">
                  <IconChangeAvatar />
                </div>
              </div>
              <p className="ml-12 font-bold text-base uppercase">
                {currentProfileData?.fname} {currentProfileData?.lname}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 w-full md:w-1/2  mb-16">
              <div>
                <p className="text-xs mb-2">Old Password</p>
                <input
                  type="password"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                  name="oldPassword"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {errors?.oldPassword && (
                  <p className="text-xs text-red-600">Old password is not correct</p>
                )}
              </div>
              <div>
                <p className="text-xs mb-2">New Password</p>
                <input
                  type="password"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
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
                <p className="text-xs mb-2">Confirm Password</p>
                <input
                  type="password"
                  className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
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
            <button
              type="button"
              className="bg-primary px-6 py-3 font-bold  text-white text-sm"
              onClick={handleChangeUserPassword}
            >
              Confirm
            </button> */}
          </div>
        );
      case tabs[2]:
        return (
          <>
            {/* <p className="uppercase flex items-center mb-5">
              <span>My Wishlist</span>
              <span className="ml-2">
                <IconWishlist />
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-7">
              {wishlist?.map((product) => (
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
            </div> */}
          </>
        );
      case tabs[3]:
        return (
          <div className="">
            {/* <div className="flex items-center justify-between font-semibold text-base border-b-2 border-[#C4C4C475] py-3">
              <p className="uppercase">Notifications</p>
              <button type="button" className="text-primary" onClick={handleToggleAllNoti}>
                Turn on all
              </button>
            </div>
            <div className="py-3 border-b border-[#C4C4C475]">
              <label htmlFor="alert" className="cursor-pointer w-full text-sm flex">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="alert"
                    onChange={() => setAlertNoti(!alertNoti)}
                    checked={alertNoti}
                    className="appearance-none w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]"
                  />
                  <div className="absolute left-[3px]">
                    <IconCheckboxCheck />
                  </div>
                </div>
                <div className="flex flex-col ml-6">
                  <span className="font-bold">Alerts & Notifications</span>
                  <span>Get Kohi news, announcements, and product updates</span>
                </div>
              </label>
            </div>
            <div className="py-3 border-b border-[#C4C4C475]">
              <label htmlFor="accountActivity" className="cursor-pointer w-full text-sm flex">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="accountActivity"
                    onChange={() => setAccountActivity(!accountActivity)}
                    checked={accountActivity}
                    className="appearance-none w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]"
                  />
                  <div className="absolute left-[3px]">
                    <IconCheckboxCheck />
                  </div>
                </div>
                <div className="flex flex-col ml-6">
                  <span className="font-bold">Account Activity</span>
                  <span>Get important notifications about you or activity you've missed</span>
                </div>
              </label>
            </div>
            <div className="py-3 border-b border-[#C4C4C475]">
              <label htmlFor="reply" className="cursor-pointer w-full text-sm flex">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="reply"
                    onChange={() => setReply(!reply)}
                    checked={reply}
                    className="appearance-none w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]"
                  />
                  <div className="absolute left-[3px]">
                    <IconCheckboxCheck />
                  </div>
                </div>
                <div className="flex flex-col ml-6">
                  <span className="font-bold">Some one reply your question</span>
                  <span>Get a reply on your review and question from anyone</span>
                </div>
              </label>
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };

  if (!isAuth) return null;

  return (
    <Layout>
      <div className="my-64 px-6 md:px-32 xl:px-60 2xl:px-[370px]">
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
            </ul>
          </div>
          <div className="mb-28 w-3/4 border border-black-10 p-9">{renderProfile()}</div>
        </div>
        <div
          className={`${
            activeTab === tabs[0] ? 'grid' : 'hidden'
          } grid-cols-1 xl:grid-cols-2 w-full gap-16 mt-[100px]`}
        >
          <div className="border border-black-10 p-9">
            <p>Account Details:</p>
            <div className="flex items-center justify-between">
              <p>First name:</p>
              <p>{currentProfile.firstName}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Last name:</p>
              <p>{currentProfile.lastName}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Display name:</p>
              <p>{currentProfile.username}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Email:</p>
              <p>{currentProfile.email}</p>
            </div>
          </div>
          <div className="border border-black-10 p-9">
            <p>Cart:</p>
          </div>
        </div>
        <div
          className={`${
            activeTab === tabs[0] ? 'grid' : 'hidden'
          } grid-cols-1 xl:grid-cols-2 w-full gap-16 mt-[100px]`}
        >
          <div className="border border-black-10 p-9">
            <p>Payment Method:</p>
          </div>
          <div className="border border-black-10 p-9">
            <p>Wish list</p>
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
