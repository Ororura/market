import { appSlice } from "@/entities/app";
import { productSlice } from "@/entities/product";

interface IActions {
  App: typeof appSlice.actions,
  Product: typeof productSlice.actions,
}

export const actions: IActions = {
  App: appSlice.actions,
  Product: productSlice.actions,
}

export type { IActions }