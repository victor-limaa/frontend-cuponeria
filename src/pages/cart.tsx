import type { NextPage } from "next";
import { CartContainer } from "../containers/CartContainer";
import { IProduct, IProductCart } from "../models/IProducts";

const Cart: NextPage = () => {
  return <CartContainer />;
};

export default Cart;
