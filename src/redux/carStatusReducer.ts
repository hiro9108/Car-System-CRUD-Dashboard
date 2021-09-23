import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootStore";
import { CAR_STATUS } from "@/types/globalTypes";

type GlobalState = {
  status: CAR_STATUS[];
};

const initialState: GlobalState = {
  status: [],
};

export const carStatusSlice = createSlice({
  name: "carStatus",
  initialState,
  reducers: {
    init: (state, action: { payload: CAR_STATUS[] }) => {
      state.status = action.payload;
    },
    create: (state, action) => {
      const { _id, make, model, year, price, status } = action.payload;
      const createObj: CAR_STATUS = {
        _id,
        make,
        model,
        year,
        price,
        status,
      };
      state.status = [...state.status, createObj];
    },
  },
});

export const { init, create } = carStatusSlice.actions;

export const selectCarStatus = (state: RootState) => {
  return state.carStatusReducer.status;
};

export default carStatusSlice.reducer;
