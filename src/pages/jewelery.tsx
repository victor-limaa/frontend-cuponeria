import type { NextPage } from "next";
import { ProductsContainer } from "../containers/ProductsContainer";
import { IProduct } from "../models/IProducts";

interface Props {
  products: IProduct[];
}

const Jewelery: NextPage<Props> = ({ products }) => {
  return <ProductsContainer data={products} />;
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  let products = await res.json();
  products = products.filter((p: IProduct) => p.category.match("jewelery"));

  return {
    props: {
      products,
    },
  };
}

export default Jewelery;
