import { IProduct } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState, productApi } from "@/entities/product";

const initialState: IProductState = {
  products: [],
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.products.splice(0, state.products.length, ...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getAllProducts.matchFulfilled, (state, { payload }) => {
      state.products = payload;
    });
  }
});

export const { setProduct } = productSlice.actions;
