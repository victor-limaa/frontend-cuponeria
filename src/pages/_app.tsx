import type { AppProps } from "next/app";
import { ProductProvider } from "../contexts/ProductContext";
import "../styles/global.modules.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp;
