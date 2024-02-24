import { createSlice } from "@reduxjs/toolkit";

const LoginState = createSlice({
	name: "Login",
	initialState: {
		isLoggedIn: false,
	},
	reducers: {
		login: (state) => {
			state.isLoggedIn = true; // Corrected from !isLoggedIn to true
		},
		logout: (state) => {
			state.isLoggedIn = false; // Corrected from !isLoggedIn to false
		},
	},
});

export const { login, logout } = LoginState.actions;
export default LoginState.reducer;
