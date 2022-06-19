import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutPage from "../layout/LayoutPage";
import ContextStore from "../Context/ContextStore";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextStore>
      <NextSeo
        title="Satrioz Blog"
        description="Front end developer tutorial"
      />
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ContextStore>
  );
}

export default MyApp;
