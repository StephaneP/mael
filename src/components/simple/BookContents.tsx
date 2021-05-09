import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BookContent({ contents }: any) {
  return (
    <div className="flex flex-col self-start px-10">
      {Object.entries(contents).map(([chapter, content]: any) => {
        return (
          <div key={chapter} className="flex flex-row gap-2">
            <Link href={content.link}>
              <a>{chapter}</a>
            </Link>
            <div className="flex flex-col gap-1">
              {Object.entries(content.items).map(([name, item]: any) => (
                <Link key={`${chapter}-${name}`} href={item.link}>
                  <a>{name}</a>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
