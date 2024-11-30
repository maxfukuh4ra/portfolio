import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./pages/experience/experience";
import ProjectsPage from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

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
          {/* <Route path="/portfolio/design" element={<Design />} /> */}
          {/* <Route path="/portfolio/personal" element={<Personal />} /> */}
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Moved Footer inside the div to maintain proper structure */}
      </div>
    </Router>
  );
}

export default App;
