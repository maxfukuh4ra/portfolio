import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = sidebarConfig.leetcode.username;
    
    // Skip if username not configured
    if (!username || username === "your-leetcode-username") {
      setLoading(false);
      setError("Please configure your LeetCode username in src/config/sidebarConfig.js");
      return;
    }
    
    const fetchLeetCodeStats = async () => {
      try {
        // Using LeetCode's GraphQL API
        const query = `
          {
            matchedUser(username: "${username}") {
              username
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              profile {
                ranking
              }
            }
          }
        `;

        const response = await fetch("https://leetcode.com/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode stats");
        }

        const data = await response.json();
        
        if (data.data?.matchedUser) {
          const user = data.data.matchedUser;
          const submissions = user.submitStats.acSubmissionNum;
          
          const easy = submissions.find(s => s.difficulty === "Easy")?.count || 0;
          const medium = submissions.find(s => s.difficulty === "Medium")?.count || 0;
          const hard = submissions.find(s => s.difficulty === "Hard")?.count || 0;
          const total = easy + medium + hard;
          const ranking = user.profile?.ranking || 0;

          setStats({
            total,
            easy,
            medium,
            hard,
            ranking: ranking.toLocaleString(),
          });
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setError(err.message);
        // Set fallback data for development
        setStats({
          total: 0,
          easy: 0,
          medium: 0,
          hard: 0,
          ranking: "N/A",
        });
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

