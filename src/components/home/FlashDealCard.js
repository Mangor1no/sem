import { IconWishlist, IconWishlistFill } from 'constants/Icons';
import { addToWishlist, removeFromWishlist } from 'data/actions/wishlist';
import { isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const FlashDealCard = ({ product }) => {
  const [addable, setAddable] = useState(true);

  const isAuth = useSelector(isAuthSelector);
  const wishlist = useSelector(wishlistSelector);

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

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }
    // Render a countdown
    return (
      <span>
        End In {hours} : {minutes} : {seconds}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-[31px]">
      <div className="relative w-3/4 md:w-[320px] md:max-w-xs">
        {isAuth && (
          <div className="absolute top-4 right-4 z-10">
            {addable ? (
              <button
                type="button"
                onClick={handleWishlist}
                className="p-2 bg-white text-blue-100 rounded-full"
              >
                <IconWishlist size={20} />
              </button>
            ) : (
              <button type="button" onClick={handleWishlist} className="p-2 bg-white rounded-full">
                <IconWishlistFill size={20} color="#45A7DE" />
              </button>
            )}
          </div>
        )}
        <img src={product.image[0]} alt={product.name} className="w-full" />
      </div>
      <div className="text-left">
        <div className="bg-yellow-100 rounded-tr-[20px] rounded-br-[20px] py-1 px-8 mb-7">
          <Countdown date={Date.now() + 696969696969} renderer={renderer} />
        </div>
        <Link href={`/shop/product/${product.id}?category=${product.category}`}>
          <p className="mb-1 text-base cursor-pointer hover:text-blue-50">{product.name}</p>
        </Link>
        <p className="mb-1 text-base font-bold">${product.price}</p>
        <div className="h-px w-full border border-dashed border-yellow-50 mt-7 mb-8" />
        <ul className="space-y-[5px] list-disc">
          <li className="ml-4 font-neue">Brand: {product.brand}</li>
          <li className="ml-4 font-neue">Pet Food Form: {product.metadata.form}</li>
          <li className="ml-4 font-neue">Stock: {product.stock}</li>
          <li className="ml-4 font-neue">Total Weight: {product.metadata.weight}</li>
        </ul>
      </div>
    </div>
  );
};

export default FlashDealCard;
