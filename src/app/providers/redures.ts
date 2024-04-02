import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "@/entities/product";
import { appSlice } from "@/entities/app";
import { api } from "@/shared/api";

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  App: appSlice.reducer,
});