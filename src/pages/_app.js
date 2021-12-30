import { useStore } from 'data/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { store, persistor } = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
