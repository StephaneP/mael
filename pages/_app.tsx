import { useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/atoms/MDX";
import SEO from "../next-seo.config";
import "../styles/styles.css";

function handleHashScroll() {
  if (window.location.hash) {
    const el = document.querySelector(`[href="${window.location.hash}"]`);
    if (el) el.scrollIntoView();
  }
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      handleHashScroll();
      window.addEventListener("hashchange", handleHashScroll, false);
    }
    return () => {
      window.removeEventListener("hashchange", handleHashScroll, false);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18191C" />
        <link rel="icon" sizes="192x192" href="/images/me.jpeg"></link>
      </Head>
      <DefaultSeo {...SEO} />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
