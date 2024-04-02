import { IProduct } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/AppStore.tsx";

const initialState: IProduct[] = [];
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;
