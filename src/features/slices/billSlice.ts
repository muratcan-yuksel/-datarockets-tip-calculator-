import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BillState {
  value: number;
}

const initialState: BillState = {
  value: 0.0,
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      console.log("billSlice: setBill: state.value: ", state.value);
    },
  },
});

export const { setBill } = billSlice.actions;

export default billSlice.reducer;
