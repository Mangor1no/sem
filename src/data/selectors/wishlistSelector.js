import { createSelector } from 'reselect';

export const getWishlist = (state) => state.wishlist;

export const wishlistIsLoadingSelector = createSelector(
  getWishlist,
  (wishlist) => wishlist.isFetching
);
export const wishlistSelector = createSelector(getWishlist, (wishlist) => wishlist.data);
