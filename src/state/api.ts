import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KPIs } from "@/state/types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (builder) => ({
    getKpis: builder.query<Array<KPIs>, void>({
      query: () => "api/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
