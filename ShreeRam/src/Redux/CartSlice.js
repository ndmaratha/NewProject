import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	reducers: {
		addItemToCart: (state, action) => {
			state.items.push(action.payload);
		},
		removeItemFromCart: (state) => {
			state.items.pop();
		},
		fetchCartDataStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchCartDataSuccess: (state, action) => {
			state.loading = false;
			state.items = action.payload;
		},
		fetchCartDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	fetchCartDataStart,
	fetchCartDataSuccess,
	fetchCartDataFailure,
} = CartSlice.actions;

// Asynchronous action to fetch data from MongoDB
export const fetchCartData = () => async (dispatch) => {
	try {
		dispatch(fetchCartDataStart());
		const res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/get/cart");
		dispatch(fetchCartDataSuccess(res.data));
	} catch (error) {
		dispatch(fetchCartDataFailure(error.message));
	}
};

export default CartSlice.reducer;
