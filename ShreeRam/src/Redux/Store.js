import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import {thunk} from 'redux-thunk';

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk
    }),
});

export default store;
