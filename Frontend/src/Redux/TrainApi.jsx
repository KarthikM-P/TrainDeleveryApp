import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RAPID_API_KEY = "a040de42e0mshbecae1f3de06211p110540jsn3ad01515016c"; // Replace with your API key

export const trainApi = createApi({
  reducerPath: "trainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://indian-railway-irctc.p.rapidapi.com/api/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", RAPID_API_KEY);
      headers.set("x-rapidapi-host", "indian-railway-irctc.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrainDetails: builder.query({
      query: (trainNumber) => `trains-search/v1/train/${trainNumber}`,
    }),
    getLiveTrainStatus: builder.query({
      query: ({ trainNumber, departureDate }) =>
        `trains/v1/train/status?departure_date=${departureDate}&isH5=true&client=web&train_number=${trainNumber}`,
    }),
  }),
});

export const { useGetTrainDetailsQuery, useGetLiveTrainStatusQuery } = trainApi;
