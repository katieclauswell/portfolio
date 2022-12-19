import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from "./components/Navigation/Header";
import Hero from "./components/Home/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack/TechStack";
import Work from "./components/Work";
import NotFound from "./components/Misc/NotFound";
import Resume from "./components/Resume";

import defaultStyle from "./assets/styles/default.css";
import mediaStyle from "./assets/styles/media.css";

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 500px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  if (matches == false) {
    document.documentElement.setAttribute("data-view", "media");
    console.log("smaller width than 500px");
  } else {
    document.documentElement.removeAttribute("data-view", "default");
    console.log("bigger width than 500px");
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
