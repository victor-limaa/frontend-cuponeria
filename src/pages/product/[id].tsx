import type { NextPage } from "next";
import { useState } from "react";
import { ProductItemContainer } from "../../containers/ProductItemContainer";
import { IProduct } from "../../models/IProducts";

interface Props {
  data: IProduct;
}

const ProductItem: NextPage<Props> = ({ data }) => {
  return <ProductItemContainer product={data} />;
};

export async function getServerSideProps(context: any) {
  const data = await JSON.parse(context.query.data);

  return {
    props: {
      data,
    },
  };
}

export default ProductItem;
