import { Services } from "@/shared/api/Services";
import { IProduct } from "@/shared";

const api = new Services<IProduct[]>();

export const response = async () => {
  return await api.getData("https://fakestoreapi.com/products");
};
