import "../../assets/styles/dark-mode.css";
import React, { useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState();

  const setDark = () => {
    setTheme("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    setTheme("light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (theme === "light") {
      setDark();
    } else {
      setLight();
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
