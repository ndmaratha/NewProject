import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [
		/* 	{
				id: 1,
				title: "iPhone 9",
				description: "An apple mobile which is nothing like apple",
				price: 549,

				rating: 4.69,
				category: "smartphones",
				thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
			}, */
		],
	},
	reducers: {
		addItemToCart: (state, actions) => {
			state.items.push(actions.payload);
		},
		removeItemFromCart: (state, actions) => {
			state.items.pop();
		},
	},
});
export const { addItemToCart, removeItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;
