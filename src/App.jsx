import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./pages/experience/experience";
import ProjectsPage from "./pages/projects/projects";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route 
              path="/portfolio" 
              element={
                <>
                  <Hero />
                  <About />
                </>
              } 
            />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/projects" element={<ProjectsPage />} />
          {/* <Route path="/design" element={<Design />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
