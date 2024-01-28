import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import {thunk} from 'redux-thunk';
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    search:SearchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk
    }),
});

export default store;
