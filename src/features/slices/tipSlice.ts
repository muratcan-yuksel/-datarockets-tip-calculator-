import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TipState {
  value: number;
}

const initialState: TipState = {
  value: 0,
};

export const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    setTip: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      console.log("tipSlice: setTip: state.value: ", state.value);
    },
  },
});

export const { setTip } = tipSlice.actions;

export default tipSlice.reducer;
