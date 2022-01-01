/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconStar, IconWishlist, IconWishlistFill } from 'constants/Icons';
import { addToWishlist, removeFromWishlist } from 'data/actions/wishlist';
import { categories } from 'data/constants';
import { isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ product }) => {
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

  return (
    <div className="w-full h-full group">
      <div className="w-full flex items-center justify-center relative overflow-hidden">
        {isAuth && (
          <div className="absolute top-4 right-4 z-20">
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
        <img
          src={product?.image?.[0]}
          alt={product?.name}
          className="w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <Link
        href={{
          pathname: `/shop/product/${product?.id}`,
          query: { category: product?.category },
        }}
      >
        <div className="mt-7 mx-2 flex flex-col items-center cursor-pointer">
          <p className="mb-1 text-base capitalize line-clamp-1 text-black-50">{product?.name}</p>
          <div className="flex items-center justify-between space-x-2">
            {product?.oldPrice ? (
              <p className="text-xs text-black-30 line-through">${product?.oldPrice}</p>
            ) : null}
            <div className="flex items-center">
              <p className="text-base">${product?.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
