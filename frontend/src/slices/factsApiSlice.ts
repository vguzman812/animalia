import { FACTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import FactType from "../types/factType";
import CreateFactType from "../types/createFactType";
import AllFactsType from "../types/allFactsType";

// Extend the base apiSlice with additional endpoints related to facts
export const factsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Query to get all facts based on keyword and pageNumber
		getAllFacts: builder.query<AllFactsType, any>({
			query: ({ keyword, pageNumber }) => ({
				url: FACTS_URL,
				params: { keyword, pageNumber },
			}),
			providesTags: ["Fact"],
			keepUnusedDataFor: 5,
		}),
		// Query to get a single fact by its ID
		getOneFact: builder.query<FactType, string>({
			query: (id) => ({ url: `${FACTS_URL}/${id}` }),
			keepUnusedDataFor: 5,
		}),
		// Query to get the top facts
		getTopFacts: builder.query<AllFactsType, void>({
			query: () => ({ url: `${FACTS_URL}/top` }),
			keepUnusedDataFor: 5,
		}),
		// Mutation to create a new fact
		createFact: builder.mutation<FactType, CreateFactType>({
			query: (data) => ({
				url: `${FACTS_URL}/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Fact"],
		}),
		// Mutation to update an existing fact
		updateFact: builder.mutation<FactType, FactType>({
			query: (data) => ({
				url: `${FACTS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Fact"],
		}),
		// Mutation to delete a fact by its ID
		deleteFact: builder.mutation<object, string>({
			query: (id) => ({
				url: `${FACTS_URL}/${id}`,
				method: "DELETE",
			}),
		}),
		// Mutation to like a fact by its ID
		likeFact: builder.mutation<FactType, string>({
			query: (id) => ({
				url: `${FACTS_URL}/${id}/like`,
				method: "POST",
			}),
			invalidatesTags: ["Fact"],
		}),
	}),
});

export const {
	useGetAllFactsQuery,
	useGetOneFactQuery,
	useCreateFactMutation,
	useUpdateFactMutation,
	useDeleteFactMutation,
	useLikeFactMutation,
	useGetTopFactsQuery,
} = factsApiSlice;
