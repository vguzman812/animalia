import { FACTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import FactType from "../types/factType";
import CreateFactType from "../types/createFactType";
import AllFactsType from "../types/allFactsType";

export const factsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllFacts: builder.query<AllFactsType, void>({
			query: ({ keyword, pageNumber }) => ({
				url: FACTS_URL,
				params: { keyword, pageNumber },
			}),
			providesTags: ["Fact"],
			keepUnusedDataFor: 5,
		}),
		getOneFact: builder.query<FactType, string>({
			query: (id) => ({
				url: `${FACTS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getTopFacts: builder.query<AllFactsType, void>({
			query: () => ({
				url: `${FACTS_URL}/top`,
			}),
			keepUnusedDataFor: 5,
		}),
		createFact: builder.mutation<FactType, CreateFactType>({
			query: (data) => ({
				url: `${FACTS_URL}/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Fact"],
		}),
		updateFact: builder.mutation<FactType, FactType>({
			query: (data) => ({
				url: `${FACTS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Fact"],
		}),
		deleteFact: builder.mutation<object, string>({
			query: (id) => ({
				url: `${FACTS_URL}/${id}`,
				method: "DELETE",
			}),
		}),
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
	useGetTopFactsQuery
} = factsApiSlice;
