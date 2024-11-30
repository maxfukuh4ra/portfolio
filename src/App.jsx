import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./pages/experience/experience";
import ProjectsPage from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

import "./transitions.css"; // Import the fade transition CSS

function App() {
  const location = useLocation(); // Get the current location for transition

  return (
    <div className={styles.App}>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname} // Unique key for each page
          timeout={300} // Animation duration in milliseconds
          classNames="fade" // Matches the CSS class prefix
        >
          <Routes location={location}>
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
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

// Wrap App component with Router
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
