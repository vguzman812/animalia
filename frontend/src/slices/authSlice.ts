import { createSlice } from "@reduxjs/toolkit";

// Retrieve user info from local storage
const userInfoFromStorage = localStorage.getItem("userInfo");

// Define the initial state for the slice
const initialState = {
	userInfo: userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null,
};

// Create a Redux slice for authentication
const authSlice = createSlice({
	// Name of the slice, which will be used in actions and reducers
	name: "auth",
	// Initial state for this slice
	initialState,
	// Reducers to handle actions
	reducers: {
		// Action to set user credentials in state and local storage
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		// Action to handle user logout, removes user info from state and local storage
		logout: (state) => {
			state.userInfo = null;
			localStorage.removeItem("userInfo");
		},
	},
});

// Exporting the actions generated by createSlice for use in components
export const { setCredentials, logout } = authSlice.actions;

// Export the reducer to be included in the Redux store
export default authSlice.reducer;
