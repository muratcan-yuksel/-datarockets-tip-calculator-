import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ResultState {
  totalResult: number;
  personResult: number;
}

const initialState: ResultState = {
  totalResult: 0,
  personResult: 0,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    calculateTotalResult: (
      state,
      action: PayloadAction<{ bill: number; tip: number }>
    ) => {
      const { bill, tip } = action.payload;
      state.totalResult = bill * (tip / 100);
      console.log(
        "resultSlice: calculateTotalResult: state.totalResult: ",
        state.totalResult
      );
    },
    calculatePersonResult: (
      state,
      action: PayloadAction<{ bill: number; tip: number; people: number }>
    ) => {
      const { bill, tip, people } = action.payload;
      state.personResult = Number(((bill * (tip / 100)) / people).toFixed(2));
      console.log(
        "resultSlice: calculatePersonResult: state.personResult: ",
        state.personResult
      );
    },
  },
});

export const { calculateTotalResult, calculatePersonResult } =
  resultSlice.actions;

export default resultSlice.reducer;
