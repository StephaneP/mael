interface FrontMatter {
  __resourcePath: string;
  slug: string;
  domain: string;
  tags: string[];
  title: string;
  layout: string;
  datetime: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  }
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontMatter: FrontMatter[];
}