import * as React from "react";
import {
  GridColumns,
  PageWrapper,
  ProductButton,
  ProductImage,
  ProductInfo,
} from "./styles";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { IProduct } from "../../models/IProducts";
import { Footer } from "../../components/Footer";
import { useProductContext } from "../../contexts/ProductContext";
import { useRouter } from "next/router";
interface Props {
  product: IProduct;
}

export const ProductItemContainer: React.FC<Props> = ({ product }) => {
  const { sendProductToCart } = useProductContext();
  const router = useRouter();

  const sendToCart = (product: IProduct) => {
    sendProductToCart(product);
    router.push("/cart");
  };

  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <GridColumns>
        <ProductImage image={product.image} />
        <ProductInfo>
          <h3>{product.title}</h3>
          <span>R${product.price}</span>
          <p>{product.description}</p>
          <ProductButton onClick={() => sendToCart(product)}>
            adicionar ao carrinho
          </ProductButton>
        </ProductInfo>
      </GridColumns>
      <Footer position={"absolute"} />
    </PageWrapper>
  );
};
