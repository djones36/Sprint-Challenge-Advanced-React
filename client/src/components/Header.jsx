import React from "react";
import { useDarkMode } from "./hooks/DarkMode";

export default function Header() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <header>
      <h1>Worlds Top Soccer Players!</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </header>
  );
}
