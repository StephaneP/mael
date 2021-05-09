import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import { MenuAlt2Icon, XIcon, HomeIcon } from "@heroicons/react/outline";
import DarkModeToggle from "../simple/DarkModeToggle";

const activeClasses = "bg-pink-600";
const normalClasses =
  "bg-opacity-30 py-1 px-5 rounded-sm hover:bg-pink-600 hover:bg-opacity-20";

const links: {
  url: string;
  name: React.ReactNode;
  test: string | undefined;
  exact?: boolean;
}[] = [
  {
    url: "/",
    name: <HomeIcon className="w-8 h-8 sm:w-6 sm:h-6" />,
    test: undefined,
    exact: true,
  },
  {
    url: "/posts",
    name: "Posts",
    test: "post",
  },
  // Disable for now
  // {
  //   url: "/books",
  //   name: "Books",
  //   test: "book",
  // },
  {
    url: "/snippets",
    name: "Snippets",
    test: "snippet",
  },
  {
    url: "/about",
    name: "About",
    test: "about",
    exact: true,
  },
];

export default function PageHeader() {
  const router = useRouter();
  const type = router.asPath.split("/").filter(Boolean).shift();
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);
  return (
    <>
      {menuOpen ? (
        <div className="top-0 right-0 left-0 bottom-0 fixed bg-pink-600 text-white z-10 flex flex-col">
          <div
            className="flex flex-row-reverse w-full py-5 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <XIcon className="w-10 h-10 mr-5" />
          </div>
          <div className="flex flex-col gap-12 items-center justify-center flex-1 text-2xl">
            {links.map((l) => (
              <Link key={l.url} href={l.url}>
                <a
                  className={classnames(
                    {
                      "border-b border-white border-solid": l.exact
                        ? type === l.test
                        : type.startsWith(l.test),
                    },
                    "text-white p-2"
                  )}
                >
                  {l.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col items-center w-full opacity-80 hover:opacity-100">
        <header className="gap-5 flex flex-row w-full justify-between max-w-4xl py-5">
          <Link href="/">
            <a
              className={classnames(
                { [activeClasses]: type === undefined },
                normalClasses,
                "sm:hidden flex-1"
              )}
            >
              <HomeIcon className="w-8 h-8 sm:w-6 sm:h-6" />
            </a>
          </Link>
          <div className="hidden sm:flex flex-row w-full justify-between max-w-4xl">
            {links.map((l) => (
              <Link key={l.url} href={l.url}>
                <a
                  className={classnames(
                    {
                      [activeClasses]: l.exact
                        ? type === l.test
                        : type.startsWith(l.test),
                    },
                    normalClasses
                  )}
                >
                  {l.name}
                </a>
              </Link>
            ))}
            <DarkModeToggle />
          </div>
          <div className="sm:hidden">
            <DarkModeToggle />
          </div>
          <div
            className="flex sm:hidden mr-5 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuAlt2Icon className="w-10 h-10" />
          </div>
        </header>
      </div>
    </>
  );
}
