import { api } from "@/shared/api";
import { IProduct } from "@/shared";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<IProduct, number>({
      query(arg) {
        return `products/${arg}`;
      },
    }),
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      transformResponse: (response: IProduct[]) => {
        return response;
      }
    }),
  }),
})

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery, useGetProductByIdQuery } = productApi;