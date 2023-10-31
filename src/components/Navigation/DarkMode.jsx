import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const newTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimated(true);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <i
        id="theme-toggle"
        className={`${theme === "dark" ? "bi bi-cloud-moon" : "bi bi-sun"} ${
          isAnimated ? "spin-animated" : ""
        }`}
        onClick={toggleTheme}
        aria-label="Dark mode toggle"
        onAnimationEnd={() => {
          setIsAnimated(false);
        }}
      />
    </>
  );
};

export default DarkMode;
