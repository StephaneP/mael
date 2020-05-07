import Head from 'next/head';
import Link from 'next/link';
import {NextSeo} from 'next-seo';
import PageWrapper from '../components/atoms/PageWrapper'
import styles from '../styles/layouts/blogPost.module.css'

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/css/prism.css" />
        </Head>
        <NextSeo
          title={`Matt Elphick | ${frontMatter.title}`}
          openGraph={{
            title: `Matt Elphick | ${frontMatter.title}`
          }}
        />
        <div className={styles.header}>
          <PageWrapper>
            <h1 className={styles.title}>{frontMatter.title}</h1>
            <h2 className={styles.time}>{frontMatter.datetime}</h2>
            <Link href='/'><a>Back</a></Link>
          </PageWrapper>
        </div>
        <PageWrapper>
          <div className={styles.content}>
          {content}
          </div>
        </PageWrapper>
      </div>
    )
  }
}