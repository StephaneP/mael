import Head from 'next/head';
import Link from 'next/link';
import {NextSeo} from 'next-seo';
import PageWrapper from '../components/atoms/PageWrapper'
import {FrontMatter} from '../types';
import styles from '../styles/layouts/blogPost.module.css'

export default (frontMatter: FrontMatter) => {
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/css/prism.css" />
        </Head>
        <NextSeo
          title={`Matt Elphick | ${frontMatter.title}`}
          canonical={`${frontMatter.domain}${frontMatter.slug}`}
          openGraph={{
            title: `Matt Elphick | ${frontMatter.title}`,
            url: `${frontMatter.domain}${frontMatter.slug}`
          }}
        />
        <div className={styles.headerContainer}>
          <PageWrapper>
        <div className={styles.header}>
            <h1 className={styles.title}>{frontMatter.title}</h1>
            <h2 className={styles.time}>{frontMatter.datetime}</h2>
            <Link href='/'><a><div className={styles.back}>Back</div></a></Link>
            {frontMatter.tags.map((t) =>
            <Link href={`/posts?tag=${t}`} key={t}><a><div className={styles.tag}>{t}</div></a></Link>)}
            </div>
          </PageWrapper>
        </div>
          <div className={styles.content}>
        <PageWrapper>
          {content}
        </PageWrapper>
          </div>
      </div>
    )
  }
}