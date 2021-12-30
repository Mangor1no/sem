import * as TYPES from 'data/types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  isFetching: false,
  data: [],
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_WISHLIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.GET_WISHLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.ADD_TO_WISHLIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, payload],
      };
    case TYPES.ADD_TO_WISHLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.REMOVE_FROM_WISHLIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: state.data.filter(
          (item) => item.productId !== payload.productId || item.variations !== payload.variations
        ),
      };
    case TYPES.REMOVE_FROM_WISHLIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

const PERSIST_KEY = 'KOHI@wishlist';

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  whitelist: ['data'],
};

const persistedReducer = persistReducer(persistConfig, wishlistReducer);

export default persistedReducer;
