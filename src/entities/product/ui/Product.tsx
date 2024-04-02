import { FC } from "react";
import { IProduct } from "@/shared";
import styles from "./Product.module.css";

interface IProps {
  product: IProduct;
}

export const Product: FC<IProps> = (props) => {
  //const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     const data = await response();
  //     console.log(data);
  //     if (data) {
  //       dispatch(setProduct(data));
  //     }
  //   })();
  // }, []);

  return (
    <div className={styles.product} key={props.product.id}>
      <div className={styles.imgFrame}>
        <img className={styles.imgProduct} src={props.product.image} alt={props.product.title} />
      </div>
      <div className={styles.text}>
        <p>Id: {props.product.id}</p>
        <p>Title: {props.product.title}</p>
        <p>Desc: {props.product.description}</p>
        <p>Category: {props.product.category}</p>
        <p>Count: {props.product.rating.count}</p>
      </div>
      <div className="price-rating">
        <div className="rate">
          <img src="./assets/photo/star.png" alt={props.product.image} width="20" height="20" />
          <p>{props.product.rating.rate}</p>
        </div>
        {/*TODO ИСПРАВЬ!*/}
        {/*<div className="price">*/}
        {/*  <img*/}
        {/*    className="add-prod"*/}
        {/*    src={count[product.id] > 0 ? filledVector : vector}*/}
        {/*    alt=""*/}
        {/*    width="18"*/}
        {/*    height="20"*/}
        {/*    onClick={() => handleClick(product)}*/}
        {/*  />*/}
        {/*  <p>{props.product.price}$</p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
