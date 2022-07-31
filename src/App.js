import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Work from "./components/Work";
import Style from './dark-mode.css'

function App() {
  const [view, setView] = useState("default");
  const [darkMode, setDarkMode] = useState(false);

  const handleView = (page) => {
    setView(page);
  };
  return (
    <>
      <Header handleView={handleView} setDarkMode={setDarkMode} darkMode={darkMode} />
      <main className={darkMode ? "dark" : "light"}>
        {(() => {
          switch (view) {
            default:
              return <Hero />;
            case "about":
              return <About />;
            case "tech-stack":
              return <Techstack />;
            case "work":
              return <Work />;
          }
        })()}
      </main>
    </>
  );
}

export default App;
