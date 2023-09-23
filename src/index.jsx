import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store, persistor } from './app/features/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import './styles/calendar.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter base="/">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId="401884818052-rkf2b70mavpbhrtslml1noir4mrd191j.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </HashRouter>,
);
