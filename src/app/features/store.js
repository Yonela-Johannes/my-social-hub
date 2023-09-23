import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './auth/authSlice'
import thunk from 'redux-thunk';
import bookSessionReducer from './bookSession/bookSessionSlice'
import contactSlice from './contact/contactSlice';
import postsSlice from './post/postsSlice';
import blogsSlice from './blogs/blogsSlice';
import serverSlice from './server/serverSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, authReducer);

const rootReducer = {
  auth: persistedUserReducer,
  book_session: bookSessionReducer,
  contact: contactSlice,
  post: postsSlice,
  blogs: blogsSlice,
  servers: serverSlice,
}


export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store)
