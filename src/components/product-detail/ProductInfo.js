import { IconStar, IconWishlist } from 'constants/Icons';
import { addToCart } from 'data/actions/cart';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [allowAddToCart, setAllowAddToCart] = useState(false);
  const isAuth = useSelector(isAuthSelector);
  const currentProfile = useSelector(currentProfileSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (quantity <= 0 || selectedColor?.length === 0 || !selectedColor) {
      setAllowAddToCart(false);
    } else {
      setAllowAddToCart(true);
    }
  }, [quantity, selectedColor]);

  const handleQuantity = (type) => () => {
    if (type === 'increase') {
      setQuantity(+quantity + 1);
    } else {
      setQuantity(+quantity - 1);
    }
  };

  const renderFilterColor = useCallback(
    (colorList) => {
      return (
        <div className="w-full -my-2">
          <ul className="flex items-center">
            {colorList.map((color, index) => (
              <li
                key={color}
                className={`flex items-center ${index === colorList.length - 1 ? '' : 'mr-4'}`}
              >
                <input
                  type="checkbox"
                  id={color}
                  className="w-6 h-6 min-w-6 rounded-full appearance-none checked:ring-2 checked:ring-primary checked:ring-offset-2 cursor-pointer"
                  style={{ backgroundColor: color }}
                  onChange={() => setSelectedColor(color)}
                  checked={selectedColor?.includes(color)}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    },
    [selectedColor]
  );

  if (!info) return null;

  const handleAddToCart = async () => {
    if (!allowAddToCart) return null;
    const finalData = {
      productId: info?.id,
      productCategory: info?.category,
      quantity: +quantity,
      variations: selectedColor,
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
    <div>
      <ToastContainer />
      <p className="font-poppins text-[#7F7F7F] text-sm mb-2">
        {info?.stock > 0 ? 'In stock' : 'Out of stock'}
      </p>
      <p className="text-lg mb-4">{info?.name}</p>
      <div className="flex items-center mb-4">
        {Array(info?.rating).fill(
          <span className="mr-[5px]">
            <IconStar />
          </span>
        )}
      </div>
      <p className="font-poppins text-sm mb-4">{info?.description}</p>
      <div className="flex items-center mb-4">
        <p className="mr-2 text-lg">${info?.price}</p>
        {info?.oldPrice ? (
          <p className="text-xs text-[#B1B1B1] line-through">${info?.oldPrice}</p>
        ) : (
          <div className="h-[18px]" />
        )}
      </div>

      <div className="border-t border-b border-[#B1B1B1] py-10 grid grid-cols-4 gap-8 items-center mb-10 md:mb-20">
        <p className="col-span-1 text-[#7F7F7F] text-base uppercase">Color:</p>
        <div className="flex items-center col-span-3">{renderFilterColor(info?.variations)}</div>
        <p className="col-span-1 text-[#7F7F7F] text-base uppercase">Quantity:</p>
        <div className="flex items-center col-span-3 border-2 border-primary max-w-min rounded-lg">
          <button
            type="button"
            onClick={handleQuantity('decrease')}
            className="flex items-center justify-center text-white pb-2 font-semibold text-lg text-center bg-primary rounded-l-sm w-10 h-10"
          >
            -
          </button>
          <NumberFormat
            className="w-16 h-full p-2 focus:outline-none text-center"
            value={quantity}
            thousandSeparator
            allowNegative={false}
            onValueChange={(values) => {
              const { formattedValue, value } = values;
              // formattedValue = $2,223
              // value ie, 2223
              setQuantity(value);
            }}
          />
          <button
            type="button"
            onClick={handleQuantity('increase')}
            className="flex items-center justify-center text-[#F2F2F2] font-semibold text-lg text-center bg-primary rounded-r-sm w-10 h-10"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full flex items-center mb-12 md:mb-0">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-[10px] px-10 border rounded-md text-base uppercase ${
            allowAddToCart
              ? 'bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out'
              : 'cursor-not-allowed bg-[#F2F2F2]'
          }`}
        >
          Add to cart
        </button>
        <button
          type="button"
          className="p-3 rounded-md bg-[#F2F2F2] ml-[20px] border border-[#F2F2F2] hover:border-primary group hover:bg-primary text-primary hover:text-white transition duration-300 ease-in-out"
        >
          <IconWishlist />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
