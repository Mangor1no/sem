import * as TYPES from 'data/types';
import { cartItemSelector } from 'data/selectors/cartSelector';
import { currentProfileSelector } from 'data/selectors/userSelector';

export const mergeGuestCart = (payload) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.MERGE_GUEST_CART_REQUEST });
    const cartItems = cartItemSelector(getState());
    const mergedCart = cartItems.map((item) =>
      item.userId === 0 ? { ...item, userId: payload.id } : item
    );
    return dispatch({
      type: TYPES.MERGE_GUEST_CART_SUCCESS,
      payload: mergedCart,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.MERGE_GUEST_CART_FAILURE,
    });
  }
};

export const updateItemFromCart = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.UPDATE_ITEM_IN_CART_REQUEST });
    const store = getState();
    const needUpdateItem = store.cart.data.find(
      (item) => item.productId === product.productId && item.variations === product.variations
    );
    dispatch({
      type: TYPES.UPDATE_ITEM_IN_CART_SUCCESS,
      payload: { product, needUpdateItem },
    });
    return true;
  } catch (err) {
    dispatch({
      type: TYPES.UPDATE_ITEM_IN_CART_FAILURE,
    });
    return false;
  }
};

export const addToCart = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.ADD_TO_CART_REQUEST });
    const store = getState();
    const existItem = store.cart.data.find(
      (item) =>
        item.productId === product.productId &&
        item.variations === product.variations &&
        item.userId === product.userId
    );
    if (
      existItem &&
      product.userId === store.user.current.id &&
      store.user.current.id === existItem.userId
    ) {
      return dispatch(updateItemFromCart(product));
    }
    dispatch({
      type: TYPES.ADD_TO_CART_SUCCESS,
      payload: product,
    });
    return true;
  } catch (err) {
    dispatch({
      type: TYPES.ADD_TO_CART_FAILURE,
    });
    return false;
  }
};

export const removeFromCart = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.REMOVE_FROM_CART_REQUEST });
    return dispatch({
      type: TYPES.REMOVE_FROM_CART_SUCCESS,
      payload,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.REMOVE_FROM_CART_FAILURE,
    });
  }
};

export const clearUserCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.CLEAR_USER_CART_REQUEST });
    const userId = currentProfileSelector(getState())?.id;
    const filteredCart = cartItemSelector(getState())?.filter((item) => item.userId !== userId);
    return dispatch({
      type: TYPES.CLEAR_USER_CART_SUCCESS,
      payload: filteredCart,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.CLEAR_USER_CART_FAILURE,
    });
  }
};
