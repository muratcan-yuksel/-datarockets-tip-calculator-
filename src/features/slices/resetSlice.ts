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
      console.log("resetSlice: setResetTrue: state.value: ", state.value);
    },
    setResetFalse: (state) => {
      state.value = false;
      console.log("resetSlice: setResetFalse: state.value: ", state.value);
    },
  },
});

export const { setResetTrue, setResetFalse } = resetSlice.actions;

export default resetSlice.reducer;
