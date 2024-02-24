import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { thunk } from "redux-thunk";
import SearchSlice from "./SearchSlice";
import LoginState from "./LoginState";
import ProfileSlice from "./ProfileSlice";

const store = configureStore({
	reducer: {
		cart: CartSlice,
		search: SearchSlice,
		login: LoginState,
		profile: ProfileSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk,
		}),
});

export default store;
