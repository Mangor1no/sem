/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines */
import Layout from 'components/Layout';
import { cartItemSelector } from 'data/selectors/cartSelector';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import banner from 'public/images/cart/cart-banner.png';
import { categories, coffeeMachines, baristaTools, coffeeBeans } from 'data/constants';
import { IconCart, IconCheckboxCheck, IconClose, IconPaginatePrev } from 'constants/Icons';
import { clearUserCart, removeFromCart } from 'data/actions/cart';
import Link from 'next/link';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';

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
  const deliveryMethod = ['Cash on delivery', 'Credit card', 'Internet banking'];

  const cartList = useSelector(cartItemSelector);
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethod[0]);
  const [selectedBank, setSelectedBank] = useState(bankList[0].name);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpire, setCardExpire] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [errors, setErrors] = useState(null);

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
        if (email.length === 0) {
          return setErrors({ email: true });
        }
        if (phone.length === 0) {
          return setErrors({ phone: true });
        }
        if (city.length === 0) {
          return setErrors({ city: true });
        }
        if (zipCode.length === 0) {
          return setErrors({ zipCode: true });
        }
        if (address.length === 0) {
          return setErrors({ address: true });
        }
        if (selectedDeliveryMethod === deliveryMethod[1]) {
          if (cardName.length === 0) {
            return setErrors({ cardName: true });
          }
          if (cardNumber.length === 0) {
            return setErrors({ cardNumber: true });
          }
          if (cardExpire.length === 0) {
            return setErrors({ cardExpire: true });
          }
          if (cardCVV.length === 0) {
            return setErrors({ cardCVV: true });
          }
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
    switch (type) {
      case categories[0].category: {
        data = coffeeMachines;
        break;
      }
      case categories[1].category: {
        data = baristaTools;
        break;
      }
      case categories[2].category: {
        data = coffeeBeans;
        break;
      }
      default:
        return null;
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

  const renderProductDetail = (pId, type) => {
    const { productName, productImage } = getProductDetail(pId, type);
    return (
      <div className="flex items-center">
        <div
          className={`hidden ${
            step === 0 ? 'mr-4 lg:mr-10 xl:mr-16' : 'mr-4'
          } w-1/3 min-w-[64px] md:px-4 md:py-4 bg-[#F2F2F2] sm:flex items-center justify-center rounded-xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 w-full h-full flex items-center justify-center p-8 z-0">
            <div className="relative w-full h-full">
              <div className="rounded-full mix-blend-normal filter blur-xl absolute w-3/4 h-3/4 bottom-4 right-[2px] bg-[#14131345]" />
            </div>
          </div>
          <img
            src={productImage}
            alt={productName}
            className="w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <p className="flex-1">{productName}</p>
      </div>
    );
  };

  const renderByStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex items-center justify-between">
            <div className="flex flex-col overflow-x-auto mb-8">
              <div className="grid grid-cols-12 gap-x-4 border-b border-gray-400 p-2 justify-items-stretch items-center mb-9 font-semibold">
                <p className="uppercase col-span-4 md:ml-8">ITEM </p>
                <p className="uppercase col-span-2 text-center">COLOR </p>
                <p className="uppercase col-span-2 text-center">QUANTITY</p>
                <p className="uppercase col-span-2 text-center">Price</p>
                <p className="uppercase col-span-2 text-center">DELETE</p>
              </div>
              <div className="grid grid-cols-12 gap-4 p-2 justify-items-stretch items-center">
                {cart.map((item, index) => (
                  <Fragment key={index}>
                    <p className="uppercase col-span-4">
                      {renderProductDetail(item.productId, item.productCategory)}
                    </p>
                    <p className="uppercase col-span-2 text-center">
                      <div
                        style={{ backgroundColor: item.variations }}
                        className="w-5 h-5 min-w-5 rounded-full mx-auto"
                      />
                    </p>
                    <p className="col-span-2 text-center">x{item.quantity}</p>
                    <p className="uppercase col-span-2 text-center">
                      ${renderProductPrice(item.productId, item.productCategory)}
                    </p>
                    <div className="uppercase col-span-2 flex items-center justify-center">
                      <button type="button" onClick={() => handleRemoveItem(item)}>
                        <IconClose size={16} />
                      </button>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 mr-8 h-full">
              <div className="mb-24">
                <p className="uppercase text-base mb-5">Delivery address</p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4 font-poppins">
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">First name</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors?.firstName && (
                      <p className="text-xs text-red-600 mt-1">First name is required</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">Last name</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors?.lastName && (
                      <p className="text-xs text-red-600 mt-1">Last name is required</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">Email</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors?.email && (
                      <p className="text-xs text-red-600 mt-1">Email is required</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">Phone number</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors?.phone && (
                      <p className="text-xs text-red-600 mt-1">Phone number is required</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">Town/City</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {errors?.city && <p className="text-xs text-red-600 mt-1">City is required</p>}
                  </div>
                  <div>
                    <p className="text-xs text-[#7F7F7F] mb-2">Zip code</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                    {errors?.zipCode && (
                      <p className="text-xs text-red-600 mt-1">Zip code is required</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-[#7F7F7F] mb-2">Address</p>
                    <input
                      type="text"
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors?.address && (
                      <p className="text-xs text-red-600 mt-1">Address is required</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-[#7F7F7F] mb-2">Additonal information (optional)</p>
                    <textarea
                      className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase text-bas mb-5">Payment method</p>
                <div className="w-full font-poppins">
                  <ul className="">
                    {deliveryMethod.map((method, index) => (
                      <>
                        <li
                          key={method}
                          className={`flex items-center ${
                            index === deliveryMethod.length - 1 ||
                            (selectedDeliveryMethod === deliveryMethod[1] && index === 1)
                              ? ''
                              : 'mb-4'
                          }`}
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              type="radio"
                              id={method}
                              name="deliveryMethod"
                              className="appearance-none w-6 h-6 min-w-6 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[3px]"
                              onChange={handleDeliveryMethod(method)}
                              checked={selectedDeliveryMethod?.includes(method)}
                            />
                            <div className="absolute left-[7px]">
                              <IconCheckboxCheck />
                            </div>
                          </div>
                          <label htmlFor={method} className="cursor-pointer w-full text-sm">
                            {method}
                          </label>
                        </li>
                        {selectedDeliveryMethod === deliveryMethod[1] && index === 1 && (
                          <div className="my-4">
                            <div className="grid grid-cols-1 gap-x-5 gap-y-4 font-poppins">
                              <div>
                                <p className="text-xs text-[#7F7F7F] mb-2">Name on card</p>
                                <input
                                  type="text"
                                  className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                                  value={cardName}
                                  onChange={(e) => setCardName(e.target.value)}
                                />
                                {errors?.cardName && (
                                  <p className="text-xs text-red-600 mt-1">
                                    Name on card is required
                                  </p>
                                )}
                              </div>
                              <div>
                                <p className="text-xs text-[#7F7F7F] mb-2">Card number</p>
                                <input
                                  type="text"
                                  className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                                  value={cardNumber}
                                  onChange={(e) => setCardNumber(e.target.value)}
                                />
                                {errors?.cardNumber && (
                                  <p className="text-xs text-red-600 mt-1">
                                    Card number is required
                                  </p>
                                )}
                              </div>
                              <div>
                                <p className="text-xs text-[#7F7F7F] mb-2">Expiration date</p>
                                <input
                                  type="text"
                                  className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                                  value={cardExpire}
                                  onChange={(e) => setCardExpire(e.target.value)}
                                />
                                {errors?.cardExpire && (
                                  <p className="text-xs text-red-600 mt-1">
                                    Expiration date is required
                                  </p>
                                )}
                              </div>
                              <div>
                                <p className="text-xs text-[#7F7F7F] mb-2">Security code</p>
                                <input
                                  type="text"
                                  className="w-full border border-disabled px-2 py-2 text-sm focus:outline-none"
                                  value={cardCVV}
                                  onChange={(e) => setCardCVV(e.target.value)}
                                />
                                {errors?.cardCVV && (
                                  <p className="text-xs text-red-600 mt-1">
                                    Security code is required
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedDeliveryMethod === deliveryMethod[2] && index === 2 && (
                          <div className="flex items-center justify-between mt-5">
                            {bankList.map((bank) => (
                              <label htmlFor={bank.name} key={bank.name} className="inline-block">
                                <input
                                  type="radio"
                                  name="bank"
                                  value={bank.name}
                                  className="hidden"
                                  checked={selectedBank.includes(bank.name)}
                                />
                                <img
                                  src={bank.logo}
                                  alt={bank.name}
                                  onClick={() => setSelectedBank(bank.name)}
                                  className={`
                                    ${
                                      selectedBank.includes(bank.name)
                                        ? 'ring-2 ring-offset-2 ring-primary'
                                        : ''
                                    } rounded-sm h-7 object-cover cursor-pointer`}
                                />
                              </label>
                            ))}
                          </div>
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:ml-8 flex flex-col overflow-x-auto mb-8">
              <div className="grid grid-cols-12 gap-x-4 border-b border-gray-400 p-2 justify-items-stretch items-center mb-9 font-semibold">
                <p className="uppercase col-span-6 md:ml-8">ITEM </p>
                <p className="uppercase col-span-2 text-center">COLOR </p>
                <p className="uppercase col-span-2 text-center">QUANTITY</p>
                <p className="uppercase col-span-2 text-center">Price</p>
              </div>
              <div className="grid grid-cols-12 gap-4 p-2 justify-items-stretch items-center">
                {cart.map((item, index) => (
                  <Fragment key={index}>
                    <p className="uppercase col-span-6">
                      {renderProductDetail(item.productId, item.productCategory)}
                    </p>
                    <p className="uppercase col-span-2 text-center">
                      <div
                        style={{ backgroundColor: item.variations }}
                        className="w-5 h-5 min-w-5 rounded-full mx-auto"
                      />
                    </p>
                    <p className="col-span-2 text-center">x{item.quantity}</p>
                    <p className="uppercase col-span-2 text-center">
                      ${renderProductPrice(item.productId, item.productCategory)}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="h-[500px] min-h-[500px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">my cart</p>
        </div>
      </div>
      <div
        className={`my-24 ${
          step < 2
            ? 'max-w-[1400px] md:px-14 py-16 bg-white mx-6 lg:mx-16 xl:mx-48 2xl:mx-64'
            : 'mx-auto'
        } rounded-md`}
        style={{ boxShadow: '6px 12px 61px rgba(43, 43, 53, 0.05)' }}
      >
        {cart.length === 0 && step === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <IconCart size={200} />
            <p className="font-poppins my-6 text-primary">Your cart is empty for now...</p>
            <Link href="/shop">
              <button
                type="button"
                className="bg-primary text-[#F2F2F2] uppercase w-1/2 py-[10px] rounded-md"
              >
                <span>Continue shopping</span>
              </button>
            </Link>
          </div>
        ) : (
          <>
            {renderByStep()}
            <div className="flex flex-col md:flex-row items-end justify-between">
              {step === 0 ? (
                <Link href="/shop">
                  <button
                    type="button"
                    className="uppercase text-base text-primary order-last md:order-first mx-auto md:mx-0 mt-6 md:mt-0 flex items-center flex-1"
                  >
                    <IconPaginatePrev active />
                    <span className="ml-4">Continue shopping</span>
                  </button>
                </Link>
              ) : (
                step === 1 && (
                  <button
                    type="button"
                    className="uppercase text-base text-primary order-last md:order-first mx-auto md:mx-0 mt-6 md:mt-0 flex items-center flex-1"
                    onClick={() => handleCheckout('back')}
                  >
                    <IconPaginatePrev active />
                    <span className="ml-4">Back</span>
                  </button>
                )
              )}
              {step === 2 ? (
                <div className="pt-16">
                  <div className="px-8 font-poppins">
                    <p className="font-oswald uppercase text-lg text-center font-bold">
                      Your order is completed
                    </p>
                    <div className="w-full grid grid-cols-2 mt-4 mb-16 gap-2 mx-auto max-w-[260px] text-sm">
                      <p className="font-semibold">Estimated delivery date:</p>
                      <p className="text-right text-primary">1/9 - 3/9</p>
                      <p className="font-semibold">Time delivery:</p>
                      <p className="text-right text-primary">7h30 - 12h30</p>
                      <p className="font-semibold">Payment:</p>
                      <p className="text-right text-primary">{selectedDeliveryMethod}</p>
                    </div>
                  </div>
                  <p className="max-w-[360px] text-center mb-52 mx-8">
                    We will call you back to confirm your order again, thank you for your purchase
                    and support our store.
                  </p>
                  <Link href="/shop">
                    <a
                      type="button"
                      className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out uppercase w-full py-[10px] rounded-b-md text-center"
                    >
                      <span>Back to shop</span>
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="w-full md:max-w-[530px] flex-1">
                  <div className="bg-[#F2F2F2] rounded-md w-full p-4 pb-6">
                    <p className="text-base uppercase">Order summary</p>
                    <div className="grid grid-cols-2">
                      <p className="font-poppins text-sm">Item total:</p>
                      <p className="text-right">{cart.length}</p>
                      <p className="font-poppins text-sm">Shipping:</p>
                      <p className="text-right">$5</p>
                      <p className="font-poppins text-sm">Subtotal:</p>
                      <p className="text-right">${renderSubTotal()}</p>
                    </div>
                    <div className="grid grid-cols-2 mt-12">
                      <p className="text-base uppercase">Total</p>
                      <p className="text-right">${(+renderSubTotal() + 5).toFixed(2)}</p>
                    </div>
                  </div>
                  {isAuth ? (
                    <button
                      type="button"
                      className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out uppercase w-full py-[10px] rounded-b-md"
                      onClick={() => handleCheckout('forward')}
                    >
                      <span>Checkout</span>
                    </button>
                  ) : (
                    <Link href="/auth">
                      <button
                        type="button"
                        className="bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out uppercase w-full py-[10px] rounded-b-md"
                      >
                        <span>Sign in to continue</span>
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
