import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer, // Pass your rootReducer here
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
