import * as TYPES from 'data/types';

export const addToWishlist = (product) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ADD_TO_WISHLIST_REQUEST });
    dispatch({
      type: TYPES.ADD_TO_WISHLIST_SUCCESS,
      payload: product,
    });
    return true;
  } catch (err) {
    dispatch({
      type: TYPES.ADD_TO_WISHLIST_FAILURE,
    });
    return false;
  }
};

export const removeFromWishlist = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.REMOVE_FROM_WISHLIST_REQUEST });
    return dispatch({
      type: TYPES.REMOVE_FROM_WISHLIST_SUCCESS,
      payload,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.REMOVE_FROM_WISHLIST_FAILURE,
    });
  }
};
