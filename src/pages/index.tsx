import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProductsContainer } from "../containers/ProductsContainer";
import { IProduct } from "../models/IProducts";

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = () => {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setFetching(false);
  };

  return <ProductsContainer fetching={fetching} data={products} />;
};

export default Home;
