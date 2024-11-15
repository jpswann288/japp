import { configureStore } from "@reduxjs/toolkit";
import googleAuthReducer from "./googleAuthSlice";

export default configureStore({
  reducer: {
    googleAuthReducer,
  },
});
