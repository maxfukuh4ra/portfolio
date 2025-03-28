import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.left}>
        <img src={getImageUrl("misc/logo.png")} alt="logo" className={styles.logo} />
      </div>

      {/* Center - Menu */}
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.menuItems} onClick={() => setMenuOpen(false)}>
          <li>
            <Link 
              to="/portfolio/" 
              className={location.pathname === "/portfolio/" ? styles.active : ""}
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/portfolio/experience" 
              className={location.pathname === "/portfolio/experience" ? styles.active : ""}
            >Work</Link>
          </li>
          <li>
            <Link 
              to="/portfolio/blog" 
              className={location.pathname === "/portfolio/blog" ? styles.active : ""}
            >Blog</Link>
          </li>
          <li>
            <Link 
              to="/portfolio/about" 
              className={location.pathname === "/portfolio/about" ? styles.active : ""}
            >About</Link>
          </li>
          <li>
            <Link 
              to="/portfolio/contact" 
              className={location.pathname === "/portfolio/contact" ? styles.active : ""}
            >Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right - Theme toggle + Hamburger */}
      <div className={styles.right}>
        <img
          className={styles.themeIcon}
          src={getImageUrl("nav/moonIcon.png")}
          alt="theme-toggle"
        />
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
      </div>
    </nav>
  );
};

export default Navbar;
