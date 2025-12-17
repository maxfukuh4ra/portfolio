import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.left}>
        <img
          src={getImageUrl("misc/logo.png")}
          alt="logo"
          className={styles.logo}
        />
      </div>

      {/* Center - Menu */}
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.menuItems} onClick={() => setMenuOpen(false)}>
          <li>
            <Link
              to="/portfolio/"
              className={
                location.pathname === "/portfolio/" ? styles.active : ""
              }
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/experience"
              className={
                location.pathname === "/portfolio/experience" ? styles.active : ""
              }
            >
              experience
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/background"
              className={
                location.pathname === "/portfolio/background" ? styles.active : ""
              }
            >
              background
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/projects"
              className={
                location.pathname === "/portfolio/projects" ? styles.active : ""
              }
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/skills"
              className={
                location.pathname === "/portfolio/skills" ? styles.active : ""
              }
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/personal"
              className={
                location.pathname === "/portfolio/personal" ||
                  location.pathname.startsWith("/portfolio/personal/")
                  ? styles.active
                  : ""
              }
            >
              personal
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/resume"
              className={
                location.pathname === "/portfolio/resume" ? styles.active : ""
              }
            >
              resume
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/contact"
              className={
                location.pathname === "/portfolio/contact" ? styles.active : ""
              }
            >
              contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right - Theme toggle + Hamburger */}
      <div className={styles.right}>
        <svg
          className={styles.themeIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        >
          {isDark ? (
            // Sun icon for dark theme
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            // Moon icon for light theme
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
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
