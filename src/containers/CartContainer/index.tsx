import React, { FC, useEffect, useState } from "react";
import {
  AmountWrapper,
  FlexDiv,
  PageTitle,
  GridColumns,
  PageWrapper,
  ProductGrid,
  ProductItem,
  ProductItemImage,
  ProductItemPrice,
  ProductItemQuantity,
  ProductItemTitle,
} from "./styles";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useProductContext } from "../../contexts/ProductContext";
import DeleteIcon from "../../assets/images/trash.svg";
import Link from "next/link";

export const CartContainer: FC = () => {
  const {
    cartProducts,
    removeProductFromCart,
    decrementProductQuantity,
    incrementProductQuantity,
  } = useProductContext();
  const [total, setTotal] = useState("");

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      totalAmount = totalAmount + cartProducts[i].price;
    }
    setTotal(totalAmount.toFixed(2));
  };

  useEffect(() => {
    getTotalAmount();
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <PageTitle>
        <h3>Meu carrinho</h3>
      </PageTitle>
      <GridColumns>
        <ProductGrid overflow={cartProducts.length > 2 ? "scroll" : "hidden"}>
          {cartProducts &&
            cartProducts.map((product, index) => (
              <ProductItem key={product.id}>
                <FlexDiv>
                  <ProductItemImage image={product.image} />
                  <ProductItemTitle>{product.title}</ProductItemTitle>
                </FlexDiv>
                <FlexDiv>
                  <ProductItemQuantity>
                    <button onClick={() => decrementProductQuantity(index)}>
                      -
                    </button>
                    <input type="text" disabled value={product.quantity} />
                    <button onClick={() => incrementProductQuantity(index)}>
                      +
                    </button>
                  </ProductItemQuantity>
                  <ProductItemPrice>
                    R$ {product.price.toFixed(2)}
                  </ProductItemPrice>
                  <span
                    id="deleteIcon"
                    onClick={() => removeProductFromCart(product)}
                  >
                    {" "}
                    <DeleteIcon />{" "}
                  </span>
                </FlexDiv>
              </ProductItem>
            ))}
        </ProductGrid>

        <AmountWrapper>
          <span>Total: R$ {total}</span>
          <Link href={"/signup"} passHref>
            <button>continuar</button>
          </Link>
        </AmountWrapper>
      </GridColumns>
      <Footer position={"absolute"} />
    </PageWrapper>
  );
};
