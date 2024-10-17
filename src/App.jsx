import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./pages/experience/experience";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <About />
                </>
              } 
            />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/design" element={<Design />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
