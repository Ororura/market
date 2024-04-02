import { FC, useEffect } from "react";
import { Product } from "@/entities/product";
import { useSelector } from "react-redux";
import { selectProduct, setProduct } from "@/entities/product";
import { IProduct } from "@/shared";
import { useAppDispatch } from "@/app/hooks/hooks.ts";
import { useGetAllProduct } from "@/entities/product/model/api/productHandler.ts";

export const Products: FC = () => {
  const selectedProduct: IProduct[] = useSelector(selectProduct);
  const dispatch = useAppDispatch();
  const { data } = useGetAllProduct();

  useEffect(() => {
    if (data) {
      dispatch(setProduct(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      {selectedProduct.map((el, idx) => (
        <Product key={idx} product={el}></Product>
      ))}
    </div>
  );
};
