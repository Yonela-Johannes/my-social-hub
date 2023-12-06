import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './auth/authSlice'
import thunk from 'redux-thunk';
import contactSlice from './contact/contactSlice';
import postsSlice from './post/postsSlice';
import storySlice from './videos/videoSlice';
import blogsSlice from './blogs/blogsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, authReducer);

const rootReducer = {
  auth: persistedUserReducer,
  contact: contactSlice,
  posts: postsSlice,
  stories: storySlice,
  blogs: blogsSlice,
}


export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store)
