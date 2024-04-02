import { FC, useEffect } from "react";
import { Product, useLazyGetAllProductsQuery } from "@/entities/product";
import { selectProduct } from "@/entities/product";
import { useAppSelector } from "@/app/providers/store.tsx";

export const Products: FC = () => {
  const selectedProduct = useAppSelector(selectProduct);
  const [getProducts] = useLazyGetAllProductsQuery();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {selectedProduct.map((el, idx) => (
        <Product key={idx} product={el}></Product>
      ))}
    </div>
  );
};
