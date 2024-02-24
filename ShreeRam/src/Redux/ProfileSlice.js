import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
	name: "profile",
	initialState: {
		data: {},
	},
	reducers: {
		createProfile: (state, action) => {
			state.data = action.payload;
		},
	},
});
export const { createProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
