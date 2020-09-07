import { createContext, useContext, useState, useEffect, FC } from "react";

export const ThemeContext = createContext<{
  colorMode: undefined | "dark" | "light";
  setColorMode: (value: "dark" | "light") => void;
}>({ colorMode: undefined, setColorMode: () => undefined });
export const ThemeProvider: FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.classList.contains("light-mode")
      ? "light"
      : "dark";
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue: "dark" | "light") => {
    rawSetColorMode(newValue);
    localStorage.setItem("color-mode", newValue);
    window.document.documentElement.classList.remove(
      newValue === "light" ? "dark-mode" : "light-mode"
    );
    window.document.documentElement.classList.add(
      newValue === "light" ? "light-mode" : "dark-mode"
    );
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        outline: "none",
        cursor: "pointer",
        fontSize: "2rem",
      }}
      type="button"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "light" ? "🌞" : "🌚"}
    </button>
  );
};
