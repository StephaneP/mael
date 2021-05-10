import React, { createRef } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../seo-config";
import useFathom from "../components/hooks/useFathom";
import { ThemeProvider } from "../components/contexts/theme";
import "../styles/main.css";

function App({ Component, pageProps, router }: AppProps) {
  useFathom();
  const scrollableEl = createRef<HTMLDivElement>();
  React.useEffect(() => {
    function handleChange() {
      if (scrollableEl.current) scrollableEl.current.scrollTo(0, 0);
    }
    router.events.on("routeChangeStart", handleChange);
    return () => {
      router.events.off("routeChangeStart", handleChange);
    };
  });
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#db2777" />
      </Head>
      <DefaultSeo {...SEO} />
      <div
        ref={scrollableEl}
        className="max-h-full overflow-y-auto sm:scrollbar-thin sm:scrollbar-thumb-pink-600 sm:scrollbar-track-gray-700"
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
