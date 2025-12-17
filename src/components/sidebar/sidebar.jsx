import React from "react";
import styles from "./sidebar.module.css";
import LeetCodeStats from "./stats/LeetCodeStats";
import GitHubStats from "./stats/GitHubStats";
import MusicListening from "./stats/MusicListening";
import CalendarStatus from "./stats/CalendarStatus";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <LeetCodeStats />
        <GitHubStats />
        <MusicListening />
        <CalendarStatus />
      </div>
    </aside>
  );
};

export default Sidebar;

