import { IProduct } from "./IProducts";

export interface IOrderItem {
  product: IProduct;
  handleClick: (product: IProduct) => void;
}
