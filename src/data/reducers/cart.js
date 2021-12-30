import * as TYPES from 'data/types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  isFetching: false,
  data: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.GET_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, payload],
      };
    case TYPES.ADD_TO_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: state.data.filter(
          (item) => item.productId !== payload.productId || item.variations !== payload.variations
        ),
      };
    case TYPES.REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.UPDATE_ITEM_IN_CART_SUCCESS: {
      const { product, needUpdateItem } = payload;
      const filterOutUpdateItem = state.data.filter(
        (item) =>
          item.productId !== needUpdateItem.productId ||
          item.variations !== needUpdateItem.variations
      );
      const updatedItem = {
        productCategory: needUpdateItem.productCategory,
        productId: needUpdateItem.productId,
        quantity: needUpdateItem.quantity + product.quantity,
        userId: needUpdateItem.userId,
        variations: needUpdateItem.variations,
      };
      filterOutUpdateItem.push(updatedItem);
      return {
        ...state,
        isFetching: false,
        data: filterOutUpdateItem,
      };
    }
    case TYPES.MERGE_GUEST_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.CLEAR_USER_CART_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

const PERSIST_KEY = 'KOHI@cart';

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  whitelist: ['data'],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export default persistedReducer;
