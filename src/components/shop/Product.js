/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from '@headlessui/react';
import ProductPreview from 'components/product-detail/ProductPreview';
import { IconCart, IconQuickView, IconWishlist, IconWishlistFill } from 'constants/Icons';
import { addToCart } from 'data/actions/cart';
import { addToWishlist, removeFromWishlist } from 'data/actions/wishlist';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

const Product = ({ product }) => {
  const [addable, setAddable] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const isAuth = useSelector(isAuthSelector);
  const wishlist = useSelector(wishlistSelector);
  const currentProfile = useSelector(currentProfileSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist.filter((item) => item.id === product.id).length > 0) {
      setAddable(false);
    } else {
      setAddable(true);
    }
  }, [wishlist]);

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

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleClose = () => {
    setShowPreview(false);
  };

  const handleAddToCart = async () => {
    const finalData = {
      productId: product?.id,
      productCategory: product?.category,
      quantity: 1,
      variations: product?.variations?.[0],
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

  return (
    <>
      <ProductPreview product={product} show={showPreview} handleClose={handleClose} />
      <div
        className="w-3/4 mx-auto md:w-full h-full group"
        onMouseOver={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div className="w-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 right-4 z-10 flex flex-col space-y-4">
            {isAuth &&
              (addable ? (
                <button
                  type="button"
                  onClick={handleWishlist}
                  className="p-2 bg-white text-blue-100 rounded-full"
                >
                  <IconWishlist size={24} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleWishlist}
                  className="p-2 bg-white rounded-full"
                >
                  <IconWishlistFill size={24} color="#45A7DE" />
                </button>
              ))}
            <Transition
              as="div"
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-4"
              show={showButtons}
            >
              <button
                type="button"
                onClick={handleAddToCart}
                className="p-2 bg-white text-blue-100 rounded-full"
              >
                <IconCart />
              </button>
            </Transition>
            <Transition
              as="div"
              enter="transition ease-out duration-500"
              enterFrom="opacity-0 -translate-x-8"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-6"
              show={showButtons}
            >
              <button
                type="button"
                onClick={handlePreview}
                className="p-2 bg-white text-blue-100 rounded-full dura"
              >
                <IconQuickView />
              </button>
            </Transition>
          </div>
          <img
            src={product?.image?.[0]}
            alt={product?.name}
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <Link
          href={{
            pathname: `/shop/product/${product?.id}`,
            query: { category: product?.category },
          }}
        >
          <div className="mt-7 mx-2 flex flex-col items-center cursor-pointer">
            <p className="mb-1 text-base capitalize line-clamp-1 text-black-50 hover:text-blue-100">
              {product?.name}
            </p>
            <div className="flex items-center justify-between space-x-2">
              {product?.oldPrice ? (
                <p className="text-xs text-black-30 line-through">${product?.oldPrice}</p>
              ) : null}
              <div className="flex items-center">
                <p className="text-base font-bold">${product?.price}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
