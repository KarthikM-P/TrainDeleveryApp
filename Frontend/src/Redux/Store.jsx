import { configureStore } from "@reduxjs/toolkit";
import { trainApi } from "./TrainApi";

export const store = configureStore({
  reducer: {
    [trainApi.reducerPath]: trainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trainApi.middleware),
});
