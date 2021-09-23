import { configureStore } from "@reduxjs/toolkit";
import carStatusReducerArg from "@/redux/carStatusReducer";

export const store = configureStore({
  reducer: {
    carStatusReducer: carStatusReducerArg,
  },
});

export type RootState = ReturnType<typeof store.getState>;
