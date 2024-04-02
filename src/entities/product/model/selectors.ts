import { RootState } from "@/app/providers/store.tsx";

export const selectProduct = (state: RootState) => state.product.products;