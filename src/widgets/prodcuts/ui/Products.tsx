import { FC, useEffect } from "react";
import { Product, useLazyGetAllProductsQuery } from "@/entities/product";
import { useStore } from "@/app/providers/hooks.ts";

export const Products: FC = () => {
  const [getProducts] = useLazyGetAllProductsQuery();
  const {
    state: {
      Product: { products }
    }
  } = useStore((store) => ({
    Product: store.Product,
  }));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((el, idx) => (
        <Product key={idx} product={el}></Product>
      ))}
    </div>
  );
};
