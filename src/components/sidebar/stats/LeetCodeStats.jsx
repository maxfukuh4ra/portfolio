import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const LeetCodeStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username = sidebarConfig.leetcode.username;

        if (!username || username === "your-leetcode-username") {
            setLoading(false);
            setError("Please configure your LeetCode username in src/config/sidebarConfig.js");
            return;
        }

        const fetchLeetCodeStats = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                const data = await response.json();

                if (data.status === "error" || !data.totalSolved) {
                    throw new Error(data.message || "User not found or profile is private");
                }

                setStats({
                    total: data.totalSolved || 0,
                    easy: data.easySolved || 0,
                    medium: data.mediumSolved || 0,
                    hard: data.hardSolved || 0,
                    ranking: data.ranking ? data.ranking.toLocaleString() : "N/A",
                });
            } catch (err) {
                console.error("Error fetching LeetCode stats:", err);

                try {
                    const fallbackResponse = await fetch(`https://leetcode-api-fa.vercel.app/${username}`);
                    if (fallbackResponse.ok) {
                        const fallbackData = await fallbackResponse.json();

                        if (fallbackData.totalSolved !== undefined) {
                            setStats({
                                total: fallbackData.totalSolved || 0,
                                easy: fallbackData.easySolved || 0,
                                medium: fallbackData.mediumSolved || 0,
                                hard: fallbackData.hardSolved || 0,
                                ranking: fallbackData.ranking ? fallbackData.ranking.toLocaleString() : "N/A",
                            });
                            return;
                        }
                    }
                } catch (fallbackErr) {
                    console.error("Fallback API also failed:", fallbackErr);
                }

                setError(err.message || "Unable to load stats");
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeStats();
    }, []);

    return (
        <div className={styles.statBox}>
            <h3 className={styles.statTitle}>leetcode</h3>
            {loading ? (
                <div className={styles.loading}>loading...</div>
            ) : error ? (
                <div className={styles.error}>unable to load stats</div>
            ) : stats ? (
                <>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>solved:</span>
                        <span className={styles.statValue}>{stats.total}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>easy:</span>
                        <span className={styles.statValue}>{stats.easy}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>medium:</span>
                        <span className={styles.statValue}>{stats.medium}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>hard:</span>
                        <span className={styles.statValue}>{stats.hard}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>rank:</span>
                        <span className={styles.statValue}>#{stats.ranking}</span>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default LeetCodeStats;

