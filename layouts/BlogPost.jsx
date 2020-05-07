import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from '../components/atoms/PageWrapper'
import styles from '../styles/layouts/blogPost.module.css'

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/css/prism.css" />
          <title>Matt Elphick | {frontMatter.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
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