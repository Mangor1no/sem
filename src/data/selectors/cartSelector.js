import { createSelector } from 'reselect';

export const getCart = (state) => state.cart;

export const cartIsLoadingSelector = createSelector(getCart, (cart) => cart.isFetching);
export const cartItemSelector = createSelector(getCart, (cart) => cart.data);
