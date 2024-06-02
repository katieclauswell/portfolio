import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

import "./assets/styles/default.css";
import "./assets/styles/dark-mode.css";

import Header from "./components/Navigation/Header";
import Hero from "./components/Home/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack/TechStack";
import Work from "./components/Work";
import NotFound from "./components/Misc/NotFound";
import Resume from "./components/Resume";
import MobileView from "./components/MobileView";

function App() {
  if (!isMobile) {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <MobileView />
      </>
    );
  }
}

export default App;
