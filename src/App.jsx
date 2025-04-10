import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import CurrentlySection from "./components/about/currently/currently";
import SkillsSection from "./components/about/skills/skills";
import About from "./components/about/about";
import ProjectsPage from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

import Personal from "./components/personal/personal";
import Soccer from "./components/personal/soccer/soccer";
import Dance from "./components/personal/dance/dance";
import Side from "./components/personal/side/side";
// import Board from "./components/personal/board/board";

import "./transitions.css";

function App() {
  const location = useLocation();

  return (
    <div className={styles.App}>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={300} classNames="fade">
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
            <Route path="/portfolio/currently" element={<CurrentlySection />} />
            <Route path="/portfolio/skills" element={<SkillsSection />} />
            <Route path="/portfolio/projects" element={<ProjectsPage />} />
            <Route path="/portfolio/personal" element={<Personal />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/personal/soccer" element={<Soccer />} />
            <Route path="/portfolio/personal/dance" element={<Dance />} />
            {/* <Route path="/portfolio/personal/board" element={<Board />} /> */}
            <Route path="/portfolio/personal/side" element={<Side />} />
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
