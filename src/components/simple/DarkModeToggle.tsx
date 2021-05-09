import * as React from "react";
import classnames from "classnames";
import { MoonIcon } from "@heroicons/react/outline";
import { SunIcon } from "@heroicons/react/solid";
import { ThemeContext } from "../contexts/theme";

const iconClasses = "sm:w-8 w-10 sm:h-8 h-10 cursor-pointer";
const icons = {
  light: (
    <SunIcon
      className={classnames(
        iconClasses,
        "text-yellow-500 filter drop-shadow-md"
      )}
    />
  ),
  dark: <MoonIcon className={iconClasses} />,
};

export default function DarkModeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  return (
    <div
      title={`Activate ${colorMode === "light" ? "dark" : "light"} mode`}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className="transform transition-transform hover:scale-110"
    >
      {icons[colorMode] || icons.dark}
    </div>
  );
}
