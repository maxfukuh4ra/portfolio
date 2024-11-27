import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/portfolio/" onClick={() => setMenuOpen(false)}>
        福原正義
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/portfolio/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
          </li>
          <li>
            <Link to="/portfolio/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/portfolio/design" onClick={() => setMenuOpen(false)}>Design</Link>
          </li>
          <li>
            <Link to="/portfolio/personal" onClick={() => setMenuOpen(false)}>Personal</Link>
          </li>
          <li>
            <Link to="/portfolio/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;