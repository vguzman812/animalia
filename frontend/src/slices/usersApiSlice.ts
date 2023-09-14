import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/login`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
				body: data,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		getAllUsers: builder.query({
			query: () => ({
				url: `${USERS_URL}`,
				method: "GET",
			}),
			providesTags: ["User"],
			keepUnusedDataFor: 5,
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useProfileMutation,
	useGetAllUsersQuery,
	useDeleteUserMutation,
} = usersApiSlice;
