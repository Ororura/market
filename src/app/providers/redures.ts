import { combineReducers } from "@reduxjs/toolkit";
import { api } from "@/shared/api";
import { productSlice } from "@/entities/product";
import { appSlice } from "@/entities/app";

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  [productSlice.name]: productSlice.reducer,
  [appSlice.name]: appSlice.reducer,
})