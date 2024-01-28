import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
	name: "search",
	initialState: {
		item: [],
	},
	reducers: {
		searchItem: (state, action) => {
			state.item.push(action.payload)
		},
	},
});

export const { searchItem } = SearchSlice.actions;
export default SearchSlice.reducer;