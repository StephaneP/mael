import "./styles.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import useFathom from "../components/hooks/useFathom";
import { ThemeProvider } from "../components/Theme";
import MDXProvider from "../components/MDXProvider";
import SEO from "../next-seo.config";

function App({ Component, pageProps }) {
  useFathom();
  return (
    <ThemeProvider>
      <MDXProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fd015d" />
          <link rel="icon" sizes="192x192" href="/images/me.jpg" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;
