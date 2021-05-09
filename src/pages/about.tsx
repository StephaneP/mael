import { GetStaticProps } from "next";
import getContentItems from "../functions/getContentItems";
import PageHeader from "../components/complex/PageHeader";
import RoundedPicture from "../components/simple/RoundedPicture";
import MetaTitle from "../components/simple/MetaTitle";
import JobItem from "../components/complex/JobItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function About({ jobs }: { jobs: any[] }) {
  return (
    <div className="util-outer">
      <MetaTitle title="About" />
      <PageHeader />
      <div className="max-w-4xl w-full flex-1 items-start mt-5 gap-5 sm:gap-8 flex flex-col px-3 text-lg">
        <RoundedPicture src="/images/paw_programming.jpg" />
        <h1 className="text-3xl">Who am I?</h1>
        <p>
          Hi, I’m Matt, I’m a full-stack developer who uses JavaScript and a
          bunch of other things to help make products to solve problems for
          people. I’m passionate about viewing the code I write in the bigger
          picture, helping with crafting the requirements for it, getting my
          hands dirty and coding it, and then monitoring it after release, and
          helping push for adoption and usage.
        </p>
        <p>
          I’m currently working at Threads Styling, using JavaScript,
          TypeScript, React, React Native, GraphQL, Koa, Terraform, AWS, and
          other things to help make tools to make our staffs lives easier,
          automating whatever can be automated to save them time.
        </p>
        <p>
          In the past I’ve spent time at MailOnline, working on their internal
          Content Management System, that their writers use to publish content.
          Before that I worked with the fantastic people at Clock, helping
          create bespoke websites and CMS’s for clients such as Stonegate Pubs,
          RibaJ, Wall Street Journal, and Riot Games.
        </p>
        <h1 className="text-3xl pt-5">My Timeline</h1>
        <p>
          Here’s my timeline in a bit more detail, and how I got to where am I
          today.
        </p>
        <div className="flex flex-col gap-20">
          {jobs.map((j) => (
            <JobItem
              key={`${j.frontmatter.company}-${j.frontmatter.from}-${j.frontmatter.to}`}
              job={j}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      jobs: (await getContentItems("job", { includeCode: true })).reverse(),
    },
  };
};
