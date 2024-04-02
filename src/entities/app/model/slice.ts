import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "@/entities/app";

const initialState: IAppState = {
  isAppLoading: false,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    }
  },
});

export const { setAppLoading } = appSlice.actions;