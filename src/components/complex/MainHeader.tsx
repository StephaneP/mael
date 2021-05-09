import Link from "next/link";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import DarkModeToggle from "../simple/DarkModeToggle";

export default function MainHeader() {
  return (
    <div className="w-full px-5 py-6 flex flex-1 justify-center">
      <div className="max-w-5xl flex-1 flex flex-col gap-5 sm:gap-1 sm:flex-row items-center">
        <div className="flex flex-row">
          <h1 className="text-gradient bg-gradient-to-br from-pink-600 via-pink-700 to-yellow-600 text-6xl font-bold uppercase flex-1 sm:pr-5">
            Matt Elphick
          </h1>
          <div className="flex sm:hidden">
            <DarkModeToggle />
          </div>
        </div>
        <div className="flex flex-row justify-around flex-1 top-1 relative w-full sm:w-auto">
          <Link href="https://github.com/maael">
            <a className="util-invert transform transition-transform hover:scale-110">
              <UseAnimations animation={github} size={35} />
            </a>
          </Link>
          <Link href="https://linkedin.com/melphick">
            <a className="util-invert transform transition-transform hover:scale-110">
              <UseAnimations animation={linkedin} size={35} />
            </a>
          </Link>
          <Link href="mailto:matthew.a.elphick@gmail.com">
            <a className="util-invert transform transition-transform hover:scale-110">
              <UseAnimations animation={mail} size={35} />
            </a>
          </Link>
          <Link href="https://cv.mael.tech">
            <a className="text-black dark:text-white transform transition-transform hover:scale-110">
              <div style={{ fontSize: 20 }}>CV</div>
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
