import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "../features/beersSlice";

export default configureStore({
  reducer: { beersReducer }
})