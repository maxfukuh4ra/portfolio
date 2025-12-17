import React from "react";
import styles from "./sidebar.module.css";
import LeetCodeStats from "./stats/LeetCodeStats";
import GitHubStats from "./stats/GitHubStats";
import MusicListening from "./stats/MusicListening";
import TimeZones from "./stats/TimeZones";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <TimeZones />
                <LeetCodeStats />
                <GitHubStats />
                <MusicListening />
            </div>
        </aside>
    );
};

export default Sidebar;

