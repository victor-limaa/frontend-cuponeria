import { createContext, FC, useCallback, useContext, useState } from "react";
import { IProduct, IProductCart } from "../models/IProducts";

interface IProductContext {
  cartProducts: IProductCart[];
  sendProductToCart(params: IProduct): void;
  removeProductFromCart(params: IProductCart): void;
  incrementProductQuantity(params: number): void;
  decrementProductQuantity(params: number): void;
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

const initialCartProducts = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: 4.1,
    count: 259,
  },
  quantity: 1,
};

const ProductProvider: FC = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<IProductCart[]>([
    initialCartProducts,
  ]);

  const sendProductToCart = useCallback(
    (params) => {
      params.quantity = 1;
      let products = [...cartProducts];
      products.push(params);
      setCartProducts(products);
    },
    [cartProducts, setCartProducts]
  );

  const removeProductFromCart = useCallback(
    (params: IProductCart) => {
      let products = [...cartProducts];

      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element === params) products.splice(index, 1);
      }

      setCartProducts(products);
    },
    [cartProducts, setCartProducts]
  );

  const decrementProductQuantity = useCallback(
    (params: number) => {
      const cart = [...cartProducts];
      const product = cart[params];

      if (product.quantity > 0) product.quantity = product.quantity - 1;

      setCartProducts(cart);
    },
    [cartProducts, setCartProducts]
  );

  const incrementProductQuantity = useCallback(
    (params: number) => {
      const cart = [...cartProducts];
      const product = cart[params];

      product.quantity = product.quantity + 1;

      setCartProducts(cart);
    },
    [cartProducts, setCartProducts]
  );

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        sendProductToCart,
        removeProductFromCart,
        decrementProductQuantity,
        incrementProductQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
