import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/atoms/MDX';
import '../styles/styles.css';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}