import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["Fact", "User"],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars 
	endpoints: (builder) => ({}),
});
