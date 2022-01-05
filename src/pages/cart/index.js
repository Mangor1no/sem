/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines */
import { Dialog, Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import { IconClose, IconInformation } from 'constants/Icons';
import { addToCart, clearUserCart, removeFromCart } from 'data/actions/cart';
import { categories, clothes, comestic, food, medicine, toy } from 'data/constants';
import { cartItemSelector } from 'data/selectors/cartSelector';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

const bankList = [
  {
    name: 'MBBank',
    logo: '/images/cart/checkout-bank-mb.png',
  },
  {
    name: 'BIDV',
    logo: '/images/cart/checkout-bank-bidv.png',
  },
  {
    name: 'VIB',
    logo: '/images/cart/checkout-bank-vib.png',
  },
  {
    name: 'ACB',
    logo: '/images/cart/checkout-bank-acb.png',
  },
];

const Cart = () => {
  const deliveryMethod = [
    'DIRECT BANK TRANSFER',
    'Cash on delivery',
    'CHECK PAYMENTS',
    'PAYPAL EXPRESS CHECKOUT',
  ];

  const cartList = useSelector(cartItemSelector);
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethod[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [errors, setErrors] = useState(null);
  const [isDiscount, setIsDiscount] = useState(false);
  const [showModalCoupon, setShowModalCoupon] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [couponValid, setCouponValid] = useState(false);

  function closeModal() {
    setShowModalCoupon(false);
  }

  function openModal() {
    setShowModalCoupon(true);
  }

  const isAuth = useSelector(isAuthSelector);
  const currentProfile = useSelector(currentProfileSelector);

  useEffect(() => {
    if (isAuth) {
      setCart(cartList.filter((item) => item.userId === currentProfile.id));
    } else {
      setCart(cartList.filter((item) => item.userId === 0));
    }
  }, [cartList, isAuth]);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleStep = (type) => {
    if (type === 'back' && step > 0) {
      return setStep(step - 1);
    }
    if (type === 'forward') {
      return setStep(step + 1);
    }
    return null;
  };

  const handleCheckout = async (type) => {
    if (type === 'forward') {
      if (step === 0) {
        return handleStep(type);
      }
      if (step === 1) {
        if (firstName.length === 0) {
          return setErrors({ firstName: true });
        }
        if (lastName.length === 0) {
          return setErrors({ lastName: true });
        }
        setErrors(null);
        await dispatch(clearUserCart());
        return handleStep(type);
      }
    }
    setErrors(null);
    return handleStep(type);
  };

  const handleDeliveryMethod = (method) => () => {
    setSelectedDeliveryMethod(method);
  };

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

  const renderProductPrice = (pId, type) => {
    const { productPrice } = getProductDetail(pId, type);
    return productPrice;
  };

  const renderSubTotal = () => {
    if (cart.length === 0) return 0;
    const priceList = cart.map((item) => {
      const { productPrice } = getProductDetail(item.productId, item.productCategory);
      return productPrice * item.quantity;
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const subTotal = priceList.reduce(reducer);
    return subTotal.toFixed(2) ?? 0;
  };

  const renderProductImage = (pId, type) => {
    const { productImage, productName } = getProductDetail(pId, type);
    return (
      <div className="w-[94px] h-[94px] min-w-[94px] overflow-hidden mx-auto p-3">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover z-10 transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
    );
  };

  const renderProductName = (pId, type) => {
    const { productName } = getProductDetail(pId, type);
    return <p className="flex-1">{productName}</p>;
  };

  const handleUpdateData = async (pId, type) => {
    const product = getProductDetail(pId, type);
    const finalData = {
      productId: product?.id,
      productCategory: product?.category,
      // quantity: +quantity, // TODO
      variations: product.variations,
    };
    if (!isAuth) {
      // guestId = 0
      finalData.userId = 0;
    } else {
      finalData.userId = currentProfile.id;
    }
    const result = await dispatch(addToCart(finalData));
  };

  const handleCoupon = () => {
    if (coupon === 'ahihi') {
      setIsDiscount(true);
      setCouponValid(true);
      closeModal();
      return toast('Coupon has been redeemed successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }
    setCouponValid(false);
    return toast.error('Coupon is not valid', {
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

  const renderByStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col overflow-x-auto mb-8 w-full">
              <table>
                <tbody>
                  <tr>
                    <td className="p-4">
                      <div className="mx-auto w-[68px] max-w-[68px] min-w-[68px]">&nbsp;</div>
                    </td>
                    <td className="p-4">
                      <div className="mx-auto">&nbsp;</div>
                    </td>
                    <td className="p-4 uppercase font-bold">
                      <div className="mx-auto w-[250px] max-w-[520px] min-w-[250px]">product</div>
                    </td>
                    <td className="p-4 uppercase font-bold">
                      <div className="mx-auto w-[130px] max-w-[130px] min-w-[130px]">price</div>
                    </td>
                    <td className="p-4 uppercase font-bold">
                      <div className="mx-auto w-[163px] max-w-[163px] min-w-[163px]">quantity</div>
                    </td>
                    <td className="p-4 uppercase font-bold">
                      <div className="mx-auto w-[140px] max-w-[140px] min-w-[140px]">total</div>
                    </td>
                  </tr>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <button type="button" onClick={() => handleRemoveItem(item)}>
                          <IconClose size={10} />
                        </button>
                      </td>
                      <td>{renderProductImage(item.productId, item.productCategory)}</td>
                      <td>{renderProductName(item.productId, item.productCategory)}</td>
                      <td>${renderProductPrice(item.productId, item.productCategory)}</td>
                      <td>
                        <p className="col-span-2 text-center">x{item.quantity}</p>
                      </td>
                      <td>
                        ${renderProductPrice(item.productId, item.productCategory) * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 1:
        return (
          <>
            <Transition appear show={showModalCoupon} as={Fragment}>
              <Dialog as="div" className="fixed inset-0 z-30 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-[#00000065]" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span className="inline-block h-screen align-middle" aria-hidden="true">
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                      <Dialog.Title as="h3" className="text-lg font-bold">
                        Enter your coupon
                      </Dialog.Title>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="border border-[#B1B1B1] text-sm px-3 py-2 w-full focus:outline-none disabled:bg-disabled"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="btn-secondary btn-big"
                          onClick={handleCoupon}
                        >
                          Redeem coupon
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
            <div className="bg-[#ECECEF] py-4 px-5 flex items-center space-x-3 font-neue text-sm mb-[77px]">
              <span>
                <IconInformation />
              </span>
              <button type="button" onClick={() => setShowModalCoupon(true)}>
                Have a Coupon? Click here to enter your code
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 mr-8 h-full">
                <div className="">
                  <div className="mb-8">
                    <p className="font-bold text-base">Billing details</p>
                    <div className="h-[2px] w-[51px] bg-[#000000]" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-5">
                    <div>
                      <p className="font-neue mb-2">
                        First name<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors?.firstName && (
                        <p className="font-neue text-red-600 mt-1">First name is required</p>
                      )}
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        Last name<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors?.lastName && (
                        <p className="font-neue text-red-600 mt-1">Last name is required</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <p className="font-neue mb-2">Company name (optional)</p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        Country<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        defaultValue="Vietnam"
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        Street address<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none mb-5"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        placeholder="Apartmemt, suite, unti etc. (optional)"
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        Town/City<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        District<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">Postcode / ZIP (optional)</p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2">
                      <p className="font-neue mb-2">Order notes (optional)</p>
                      <textarea
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        rows="4"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">Phone (optional)</p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="font-neue mb-2">
                        Email<span className="text-red-600">*</span>
                      </p>
                      <input
                        type="text"
                        className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 my-6">
                  <input type="checkbox" name="diffAddress" id="diffAddress" />
                  <label htmlFor="diffAddress">Ship to a different address?</label>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:ml-8 flex flex-col overflow-x-auto mb-8 border-2 border-[#9D9D9D] px-[52px] py-[50px] text-sm font-neue">
                <div className="mb-8">
                  <p className="font-bold text-base font-nunito">Your order</p>
                  <div className="h-[2px] w-[51px] bg-[#000000]" />
                </div>
                <div className="flex items-center justify-between pb-[10px] border-b border-[#C9C9C9]">
                  <p>Product</p>
                  <p>Total</p>
                </div>
                <div className="border-b border-[#C9C9C9] space-y-[10px] pt-6 pb-[30px]">
                  {cart.map((item, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <div className="flex items-center space-x-1">
                        <span>{renderProductName(item.productId, item.productCategory)}</span>{' '}
                        <span>x {item.quantity}</span>
                      </div>
                      <div>${renderProductPrice(item.productId, item.productCategory)}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pb-[10px] border-b border-[#C9C9C9] pt-3">
                  <p>Subtotal</p>
                  <p>${renderSubTotal()}</p>
                </div>
                <div className="flex justify-between pb-[10px] border-b border-[#C9C9C9] pt-3">
                  <p>Shipping</p>
                  <div className="text-right">
                    <p>Flat rate: $2</p>
                    {isDiscount && couponValid && <p>Coupon: -$2</p>}
                  </div>
                </div>
                <div className="flex items-center justify-between pb-[10px] border-b border-[#C9C9C9] pt-3">
                  <p>Total</p>
                  <p>${+renderSubTotal() + 2 - (isDiscount && couponValid ? 2 : 0)}</p>
                </div>
                <div>
                  <div className="w-full mt-8">
                    <ul className="">
                      {deliveryMethod.map((method, index) => (
                        <>
                          <li key={method} className="flex items-center mb-2">
                            <div className="relative flex items-center justify-center">
                              <input
                                type="radio"
                                id={method}
                                name="deliveryMethod"
                                className="mr-2"
                                onChange={handleDeliveryMethod(method)}
                                checked={selectedDeliveryMethod?.includes(method)}
                              />
                            </div>
                            <label
                              htmlFor={method}
                              className="cursor-pointer w-full text-black-50 uppercase"
                            >
                              {method}
                            </label>
                          </li>
                          {selectedDeliveryMethod === deliveryMethod[0] && index === 0 && (
                            <p className="text-black-50 mt-[6px] mb-8">
                              Make your payment directly into our bank account. Please use your
                              Order ID as the payment reference. Your order will not be shipped
                              until the funds have cleared in our account.
                            </p>
                          )}
                        </>
                      ))}
                    </ul>
                  </div>
                  <p className="text-black-50">
                    Your personal data will be used to process your order, support your experience
                    throughout this website, and for other purposes described in our{' '}
                    <span className="text-blue-50">privacy policy</span>
                  </p>
                </div>
                <div className="flex items-baseline space-x-2 my-6 mb-16">
                  <input type="checkbox" name="agreement" id="agreement" />
                  <label htmlFor="agreement">
                    I have read and agree to the tic tic website terms and conditions
                    <span className="text-red-600">*</span>
                  </label>
                </div>
                <button
                  type="button"
                  className="btn-secondary transition duration-150 ease-in-out uppercase px-[50px] py-[10px] w-2/3 mx-auto"
                  onClick={() => handleCheckout('forward')}
                >
                  <span>Place order</span>
                </button>
              </div>
            </div>
          </>
        );

      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">Cart</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">Cart</span>
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
        {cart.length === 0 && step === 0 ? (
          <div className="flex flex-col items-center justify-center py-60">
            <p className="text-xl my-6 text-blue-100">Your cart is empty for now...</p>
            <Link href="/shop">
              <button
                type="button"
                className="btn-primary text-[#F2F2F2] uppercase w-1/2 py-[10px]"
              >
                <span>Continue shopping</span>
              </button>
            </Link>
          </div>
        ) : (
          <>
            {renderByStep()}
            <div
              className={`flex flex-col md:flex-row items-end ${
                step === 2 ? 'justify-center' : 'justify-end'
              }`}
            >
              {step === 2 ? (
                <div className="pt-16">
                  <div className="px-8 mb-[77px]">
                    <p className="text-2xl md:text-[96px] md:leading-[130px] text-center font-bold mb-5">
                      Thank you
                    </p>
                    <p className="text-lg md:text-2xl text-center font-bold mb-8">
                      Your orders was completed successfully
                    </p>
                    <p className="text-center">
                      You will receive an email and a phone call to confirm your orders very
                      quickly, so keep it touch with us!
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-[33px]">
                    <Link href="/shop">
                      <a
                        type="button"
                        className="btn-secondary transition duration-150 ease-in-out uppercase px-[43px] py-[10px] text-center w-max"
                      >
                        <span>BACK TO SHOPPING</span>
                      </a>
                    </Link>
                    <Link href="/profile">
                      <a
                        type="button"
                        className="btn-primary transition duration-150 ease-in-out uppercase px-[43px] py-[10px] text-center w-max"
                      >
                        <span>VIEW YOUR ORDERS</span>
                      </a>
                    </Link>
                  </div>
                  <img src="/images/cart/1.png" alt="1" className="max-w-[760px] mx-auto" />
                </div>
              ) : step === 0 ? (
                <div className="w-full md:max-w-[530px] flex-1">
                  <div className="flex items-center justify-end pt-8">
                    {isAuth ? (
                      <button
                        type="button"
                        className="btn-secondary transition duration-150 ease-in-out uppercase px-[50px] py-[10px] w-max"
                        onClick={() => handleCheckout('forward')}
                      >
                        <span>Place to order</span>
                      </button>
                    ) : (
                      <Link href="/auth">
                        <button
                          type="button"
                          className="btn-secondary w-max transition duration-150 ease-in-out uppercase px-[50px] py-[10px]"
                        >
                          <span>Sign in to continue</span>
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
