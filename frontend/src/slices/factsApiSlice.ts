import { FACTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import FactType from "../types/factType";

export const factsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllFacts: builder.query<FactType[], void>({
			query: () => ({
				url: FACTS_URL,
			}),
			keepUnusedDataFor: 5
		}),
		getOneFact: builder.query<FactType, string>({
			query: (id) => ({
				url: `${FACTS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5
		}),
	}),
});

export const { useGetAllFactsQuery, useGetOneFactQuery } = factsApiSlice;
