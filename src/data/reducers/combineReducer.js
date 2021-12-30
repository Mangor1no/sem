import { combineReducers } from 'redux';
import cartReducer from './cart';
import userReducer from './user';
import wishlistReducer from './wishlist';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  wishlist: wishlistReducer,
});

export default appReducer;
