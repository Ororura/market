import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "@/shared";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProductById: build.query<IProduct, number>({
      query(arg) {
        return `products/${arg}`;
      },
    }),
    getAllProducts: build.query<IProduct[], void>({
      query() {
        return "products";
      },
    }),
  }),
});

export const useGetProductById = productApi.endpoints?.getProductById.useQuery;
export const useGetAllProduct = productApi.endpoints?.getAllProducts.useQuery;
