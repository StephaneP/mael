import Head from 'next/head';

export default frontMatter => {
  console.info('>FM', frontMatter);
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/css/prism.css" />
        </Head>
        <h1>{frontMatter.title}</h1>
        <h2>{frontMatter.datetime}</h2>
        {content}
      </div>
    )
  }
}