import { FACTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import FactType from "../types/factType";

export const factsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFacts: builder.query<FactType[], void>({
			query: () => ({
				url: FACTS_URL,
			}),
			keepUnusedDataFor: 5
		}),
	}),
});

export const { useGetFactsQuery } = factsApiSlice;
