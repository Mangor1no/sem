import { IconStar, IconWishlist, IconWishlistFill } from 'constants/Icons';
import { addToCart } from 'data/actions/cart';
import { addToWishlist, removeFromWishlist } from 'data/actions/wishlist';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const [allowAddToCart, setAllowAddToCart] = useState(false);
  const isAuth = useSelector(isAuthSelector);
  const currentProfile = useSelector(currentProfileSelector);
  const [addable, setAddable] = useState(true);
  const [selectedVariation, setSelectedVariation] = useState('');

  const wishlist = useSelector(wishlistSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (info) {
      if (wishlist.filter((item) => item.id === info.id).length > 0) {
        setAddable(false);
      } else {
        setAddable(true);
      }
    }
  }, [wishlist, info]);

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
                  id={variation}
                  className="hidden"
                  onChange={() => setSelectedVariation(variation)}
                  checked={selectedVariation === variation}
                  name={variation}
                />
                <label
                  htmlFor={variation}
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

  if (!info) return null;

  const handleAddToCart = async () => {
    if (!allowAddToCart) return null;
    const finalData = {
      productId: info?.id,
      productCategory: info?.category,
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
      dispatch(addToWishlist(info));
    } else {
      console.log('remove');
      await setAddable(true);

      // handleRemoveToWishlist
      dispatch(removeFromWishlist(info));
    }
  };

  return (
    <div>
      <p className="text-[42px] leading-[63px] font-bold">{info?.name}</p>
      <div className="flex items-center mb-4 font-bold text-blue-100">
        <p className="mr-2 text-[32px] leading-[48px]">${info?.price}</p>
        {info?.oldPrice ? (
          <p className="text-xs text-[#B1B1B1] line-through">${info?.oldPrice}</p>
        ) : (
          <div className="h-[18px]" />
        )}
      </div>
      <div className="flex items-center mb-4">
        {Array(Math.ceil(info?.rating)).fill(
          <span className="mr-[5px]">
            <IconStar />
          </span>
        )}
      </div>
      <p className="font-neue mb-6 border-t border-[#C9C9C9] pt-8 mt-[40px] text-black-50">
        {info?.description}
      </p>
      <div className="pt-[33px] pb-[40px] border-t border-b border-dashed border-[#ECECEF]">
        <p className="font-neue mb-4 text-black-50">Size</p>
        <div className="flex items-center col-span-3">
          {renderFilterVariation(info?.variations)}
        </div>
      </div>
      <div className="pt-[40px] flex gap-[10px] items-center mb-[51px] flex-wrap">
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
          className={`py-[11px] px-9 border border-blue-100 font-neue uppercase min-w-max ${
            allowAddToCart
              ? 'btn-secondary transition duration-150 ease-in-out'
              : 'cursor-not-allowed bg-black-10 border-black-10 text-white'
          }`}
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
  );
};

export default ProductInfo;
