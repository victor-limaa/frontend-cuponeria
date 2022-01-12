import { OrderItemButton, OrderItemImage, OrderItemWrapper } from "./styles";
import { IOrderItem } from "../../models/IOrderItem";

export const OrderItem = ({ product, handleClick }: IOrderItem) => {
  return (
    <OrderItemWrapper>
      <OrderItemImage image={product.image} />
      <p>{product.title}</p>
      <h3>R${product.price}</h3>
      <OrderItemButton onClick={() => handleClick(product)}>
        ver produto
      </OrderItemButton>
    </OrderItemWrapper>
  );
};
