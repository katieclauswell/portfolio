import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Work from "./components/Work";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";

import defaultStyle from "./assets/styles/default.css";
import mediaStyle from "./assets/styles/media.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 400px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 400px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  if (matches == false) {
    document.documentElement.setAttribute("data-view", "media");
    console.log("testing for false");
  } else {
    document.documentElement.removeAttribute("data-view", "default");
    console.log("testing for true")
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<Techstack />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
