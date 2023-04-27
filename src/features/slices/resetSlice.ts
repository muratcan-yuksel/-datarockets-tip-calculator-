import { createSlice } from "@reduxjs/toolkit";

export interface ResetState {
  value: boolean;
}

const initialState: ResetState = {
  value: false,
};

export const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    setResetTrue: (state) => {
      state.value = true;
    },
    setResetFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setResetTrue, setResetFalse } = resetSlice.actions;

export default resetSlice.reducer;
