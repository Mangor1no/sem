import { Dialog, Transition } from '@headlessui/react';
import { IconStar, IconWishlist, IconWishlistFill } from 'constants/Icons';
import { addToCart } from 'data/actions/cart';
import { addToWishlist, removeFromWishlist } from 'data/actions/wishlist';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

const ProductPreview = ({ show, product, handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef();
  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  function closeModal() {
    setIsOpen(false);
    handleClose();
  }

  function openModal() {
    setIsOpen(true);
  }
  const [quantity, setQuantity] = useState(1);
  const [allowAddToCart, setAllowAddToCart] = useState(false);
  const isAuth = useSelector(isAuthSelector);
  const [addable, setAddable] = useState(true);
  const [selectedVariation, setSelectedVariation] = useState('');

  const currentProfile = useSelector(currentProfileSelector);
  const wishlist = useSelector(wishlistSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      if (wishlist.filter((item) => item.id === product.id).length > 0) {
        setAddable(false);
      } else {
        setAddable(true);
      }
    }
  }, [wishlist, product]);

  useEffect(() => {
    if (quantity <= 0 || selectedVariation?.length === 0 || !selectedVariation) {
      setAllowAddToCart(false);
    } else {
      setAllowAddToCart(true);
    }
  }, [quantity, selectedVariation]);

  const handleQuantity = (type) => () => {
    if (type === 'increase') {
      setQuantity(+quantity + 1);
    } else {
      setQuantity(+quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!allowAddToCart) return null;
    const finalData = {
      productId: product?.id,
      productCategory: product?.category,
      quantity: +quantity,
      variations: selectedVariation,
    };
    if (!isAuth) {
      // guestId = 0
      finalData.userId = 0;
    } else {
      finalData.userId = currentProfile.id;
    }
    const result = await dispatch(addToCart(finalData));
    if (result) {
      return toast('Add to cart successfully', {
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
    return toast.error('Add to cart failed, please try again', {
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

  const handleWishlist = async () => {
    if (addable) {
      console.log('add');
      await setAddable(false);

      // handleAddToWishlist
      dispatch(addToWishlist(product));
    } else {
      console.log('remove');
      await setAddable(true);

      // handleRemoveToWishlist
      dispatch(removeFromWishlist(product));
    }
  };

  const renderFilterVariation = useCallback(
    (variationList) => {
      return (
        <div className="w-full">
          <ul className="flex items-center">
            {variationList.map((variation, index) => (
              <li
                key={variation}
                className={`flex items-center ${index === variationList.length - 1 ? '' : 'mr-4'}`}
              >
                <input
                  type="checkbox"
                  id={`${variation}-preview`}
                  className="hidden"
                  onChange={() => setSelectedVariation(variation)}
                  checked={selectedVariation === variation}
                  name={`${variation}-preview`}
                />
                <label
                  htmlFor={`${variation}-preview`}
                  className={`${
                    selectedVariation === variation ? 'bg-yellow-100' : 'bg-white'
                  } text-blue-100 w-[80px] h-[50px] min-w-[80px] flex items-center justify-center border-[3px] border-yellow-100 font-bold`}
                >
                  {variation}
                </label>
              </li>
            ))}
          </ul>
        </div>
      );
    },
    [selectedVariation]
  );

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto"
          onClose={closeModal}
          initialFocus={cancelButtonRef}
        >
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
              <div className="inline-block w-full md:max-w-5xl max-h-[630px] p-7 overflow-y-auto overflow-x-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-[30px]">
                  <img
                    src={product.image[0]}
                    alt=""
                    className="w-full md:w-1/2 h-full object-cover"
                  />
                  <div className="w-full md:w-1/2">
                    <div className="mt-2">
                      <p className="text-[32px] leading-[48px] text-black-100 mb-[10px]">
                        {product.name}
                      </p>
                      <p className="text-[32px] leading-[48px] text-blue-100 mb-[10px] font-bold">
                        ${product.price}
                      </p>
                      <div className="flex items-center mb-10">
                        {Array(Math.ceil(product.rating)).fill(
                          <span className="mr-[5px]">
                            <IconStar />
                          </span>
                        )}
                      </div>
                      <hr />
                      <p className="mt-[31px] text-black-50 mb-2">{product.description}</p>
                      <div className="pt-[11px] pb-[26px] border-t border-b border-dashed border-[#ECECEF]">
                        <p className="font-neue mb-4 text-black-50">Size</p>
                        <div className="flex items-center col-span-3">
                          {renderFilterVariation(product?.variations)}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="pt-5 flex gap-[10px] items-center flex-wrap">
                        <div className="flex items-center col-span-3 border-4 border-yellow-100 max-w-min">
                          <button
                            type="button"
                            onClick={handleQuantity('decrease')}
                            className="flex items-center justify-center font-semibold text-lg text-center bg-yellow-100 text-blue-100 w-8 h-10"
                          >
                            -
                          </button>
                          <NumberFormat
                            className="w-8 h-full py-2 px-1 focus:outline-none text-center bg-yellow-100 text-blue-100 border border-yellow-100"
                            value={quantity}
                            thousandSeparator
                            allowNegative={false}
                            onValueChange={(values) => {
                              const { value } = values;
                              setQuantity(value);
                            }}
                          />
                          <button
                            type="button"
                            onClick={handleQuantity('increase')}
                            className="flex items-center justify-center font-semibold text-lg text-center bg-yellow-100 text-blue-100 w-8 h-10"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={handleAddToCart}
                          className={`py-[11px] px-9 border font-neue font-bold uppercase min-w-max ${
                            allowAddToCart
                              ? 'btn-secondary border-blue-100 transition duration-150 ease-in-out'
                              : 'cursor-not-allowed border-[#C9C9C9] bg-[#C9C9C9] text-white'
                          }`}
                          ref={cancelButtonRef}
                        >
                          Add to cart
                        </button>
                        <button
                          type="button"
                          className="btn-primary p-3 transition duration-300 ease-in-out"
                          onClick={handleWishlist}
                        >
                          {isAuth && addable ? (
                            <IconWishlist size={24} />
                          ) : (
                            <IconWishlistFill size={24} color="#45A7DE" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductPreview;
