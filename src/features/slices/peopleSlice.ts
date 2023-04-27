import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PeopleState {
  value: number;
}

const initialState: PeopleState = {
  value: 0,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      console.log("peopleSlice: setPeople: state.value: ", state.value);
    },
  },
});

export const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
