import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Work from "./components/Work";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<Techstack />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
