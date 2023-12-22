// Import the configureStore method from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import slices for API and authentication
import { apiSlice } from './slices/apiSlice';
import authSliceReducer from './slices/authSlice';

// Configure the Redux store
const store = configureStore({
  // Define the reducers used in the application
  reducer: {
    // Add the API slice reducer under its reducer path
    [apiSlice.reducerPath]: apiSlice.reducer,

    // Add the authentication slice reducer
    auth: authSliceReducer,
  },
  // Define the middleware used in the application
  middleware: (getDefaultMiddleware) =>
    // Get the default middleware and append the middleware from the API slice
    getDefaultMiddleware().concat(apiSlice.middleware),

  // Enable Redux DevTools for debugging
  devTools: true,
});

// Export the configured store
export default store;
