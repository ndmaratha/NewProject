import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItemToCart: (state, actions) => {
			state.items.push(actions.payload);
			
		},
		removeItemFromCart: (state) => {
			state.items.pop();
		},
	},
});
export const { addItemToCart, removeItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;
