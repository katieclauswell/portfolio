import "../../assets/styles/dark-mode.css";
import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // error handling
    if (localTheme == undefined) {
      setTheme("light");
    }
    // apply styling
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <i
        id="theme-toggle"
        className={theme === "dark" ? "bi bi-cloud-moon" : "bi bi-sun"}
        onClick={toggleTheme}
        aria-label="Dark mode toggle"
      />
    </>
  );
};

export default DarkMode;
