import { configureStore } from "@reduxjs/toolkit";
import billReducer from "../features/slices/billSlice";
import peopleReducer from "../features/slices/peopleSlice";
import tipReducer from "../features/slices/tipSlice";
import resultReducer from "../features/slices/resultSlice";
import resetReducer from "../features/slices/resetSlice";

export const store = configureStore({
  reducer: {
    bill: billReducer,
    people: peopleReducer,
    tip: tipReducer,
    result: resultReducer,
    reset: resetReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
