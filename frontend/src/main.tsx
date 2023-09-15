// External Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

// Internal Modules/Screens
import store from "./store.ts";
import App from "./App.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import FactScreen from "./screens/FactScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
import FactListScreen from "./screens/FactListScreen.tsx";
import UserListScreen from "./screens/UserListScreen.tsx";
import CreateFactScreen from "./screens/CreateFactScreen.tsx";
import EditFactScreen from "./screens/EditFactScreen.tsx";
import UserEditScreen from "./screens/UserEditScreen.tsx";

// Routes/Components
import AdminRoute from "./components/AdminRoute.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}>
			{/* Public Routes */}
			<Route
				index={true}
				path="/"
				element={<HomeScreen />}
			/>
			<Route
				path="/search/:keyword"
				element={<HomeScreen />}
			/>
			<Route
				path="/search/:keyword/page/:pageNumber"
				element={<HomeScreen />}
			/>
			<Route
				path="/page/:pageNumber"
				element={<HomeScreen />}
			/>
			<Route
				path="/fact/:id"
				element={<FactScreen />}
			/>
			<Route
				path="/login"
				element={<LoginScreen />}
			/>
			<Route
				path="/register"
				element={<RegisterScreen />}
			/>

			{/* Private Routes */}
			<Route
				path=""
				element={<PrivateRoute />}>
				<Route
					path="/profile"
					element={<ProfileScreen />}
				/>
				<Route
					path="/fact/create"
					element={<CreateFactScreen />}
				/>
				<Route
					path="/fact/:id/edit"
					element={<EditFactScreen />}
				/>
			</Route>

			{/* Admin-Only Routes */}
			<Route
				path=""
				element={<AdminRoute />}>
				<Route
					path="/admin/factlist"
					element={<FactListScreen />}
				/>
				<Route
					path="/admin/userlist"
					element={<UserListScreen />}
				/>
				<Route
					path="/admin/factlist/page/:pageNumber"
					element={<FactListScreen />}
				/>
				<Route
					path="/admin/userlist/page/:pageNumber"
					element={<UserListScreen />}
				/>
				<Route
					path="/admin/user/:id/edit"
					element={<UserEditScreen />}
				/>
			</Route>
		</Route>
	)
);

// Render the React app
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* HelmetProvider for managing all changes to the document head */}
		<HelmetProvider>
			{/* Redux store provider */}
			<Provider store={store}>
				{/* Router Provider for react-router-dom */}
				<RouterProvider router={router} />
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);
