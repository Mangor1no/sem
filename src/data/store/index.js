import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
/**
 * Middleware
 */
import thunk from 'redux-thunk';

import appReducer from 'data/reducers/combineReducer';
import { useMemo } from 'react';

const finalMiddleware = [];
finalMiddleware.push(thunk);

const initialState = {};

let store;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export function configStore(preloadedState = initialState) {
  store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...finalMiddleware))
  );
  return store;
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? configStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = configStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

// eslint-disable-next-line no-shadow
export function useStore(initialState) {
  // eslint-disable-next-line no-shadow
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = persistStore(store);
  return { store, persistor };
}
