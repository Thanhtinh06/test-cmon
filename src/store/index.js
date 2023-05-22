import { configureStore } from "@reduxjs/toolkit";
import { managePlayerReducer } from "./managePlayer/slice";

export const store = configureStore({
  reducer : {
    managePlayer : managePlayerReducer,
  }
})