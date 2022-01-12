import * as React from "react";
import { FlexRow, GridColumns, HomeWrapper, ItemsWrapper } from "./styles";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { IProduct } from "../../models/IProducts";
import { OrderItem } from "../../components/OrderItem";
import { Footer } from "../../components/Footer";
import { SelectOrderComponent as SelectOrder } from "../../components/SelectOrder";
import { useRouter } from "next/router";

interface Props {
  data: IProduct[];
  fetching?: boolean;
}

export const ProductsContainer: React.FC<Props> = ({ data, fetching }) => {
  const router = useRouter();
  const [products, setProducts] = React.useState(data);

  const handleOpenItem = (product: any) => {
    router.push({
      pathname: `/product/${product.id}`,
      query: { data: JSON.stringify(product) },
    });
  };

  const changeFilter = (d: IProduct[]) => {
    setProducts(d);
  };

  React.useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <HomeWrapper>
      <Header />
      <Navbar />
      <ItemsWrapper>
        {fetching ? (
          <h2>Aguarde... Estamos carregando a loja!</h2>
        ) : (
          <>
            <FlexRow justify={"space-between"} align={"center"}>
              <h3>Sugestões para você</h3>
              <SelectOrder changeFilter={(d) => changeFilter(d)} data={data} />
            </FlexRow>
            <GridColumns>
              {products.map((p: IProduct) => (
                <OrderItem
                  key={p.id}
                  product={p}
                  handleClick={handleOpenItem}
                />
              ))}
            </GridColumns>
          </>
        )}
      </ItemsWrapper>
      <Footer position={products.length ? "none" : "absolute"} />
    </HomeWrapper>
  );
};
