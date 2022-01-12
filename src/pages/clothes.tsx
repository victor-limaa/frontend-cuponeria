import type { NextPage } from "next";
import { ProductsContainer } from "../containers/ProductsContainer";
import { IProduct } from "../models/IProducts";

interface Props {
  products: IProduct[];
}

const Clothes: NextPage<Props> = ({ products }) => {
  return <ProductsContainer data={products} />;
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  let products = await res.json();
  products = products.filter((p: IProduct) => p.category.match("clothing"));

  return {
    props: {
      products,
    },
  };
}

export default Clothes;
