import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";

export const store = configureStore({
  reducer: reducer,
  preloadedState: { value: 0 }
});
