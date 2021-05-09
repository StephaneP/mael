import * as React from "react";
import Image from "next/image";
import { getMDXComponent } from "mdx-bundler/client";
import mdxComponents from "../mdx";

export default function JobItem({
  job: { code, frontmatter },
}: {
  job: {
    code: string;
    frontmatter: { company: string; logo: string; from: string; to: string };
  };
}) {
  const Component = React.useMemo(() => getMDXComponent(code) || null, [code]);
  return (
    <section className="flex flex-col md:flex-row gap-5 md:gap-7">
      <div className="relative bg-black bg-opacity-50 w-40 h-40 rounded-full overflow-hidden filter drop-shadow-xl mx-auto">
        <Image src={frontmatter.logo} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1">
        <div className="flex flex-row">
          <div className="flex-1 text-2xl text-pink-600">
            {frontmatter.company}
          </div>
          <div>
            {frontmatter.from} - {frontmatter.to}
          </div>
        </div>
        <div className="md">
          <Component components={mdxComponents} />
        </div>
      </div>
    </section>
  );
}
