import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";
import { sidebarConfig } from "../../../config/sidebarConfig";

const GitHubStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username = sidebarConfig.github.username;


        const fetchGitHubStats = async () => {
            try {
                // Fetch user info
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) {
                    throw new Error("Failed to fetch GitHub user");
                }
                const userData = await userResponse.json();

                // Fetch repos
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) {
                    throw new Error("Failed to fetch GitHub repos");
                }
                const reposData = await reposResponse.json();

                // Calculate stats
                const totalRepos = reposData.length;
                const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
                const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);

                // Get language stats (simplified - count repos by primary language)
                const languages = {};
                reposData.forEach(repo => {
                    if (repo.language) {
                        languages[repo.language] = (languages[repo.language] || 0) + 1;
                    }
                });
                const topLanguages = Object.entries(languages)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3)
                    .map(([lang, count]) => ({ lang, count }));

                setStats({
                    publicRepos: totalRepos,
                    stars: totalStars,
                    forks: totalForks,
                    followers: userData.followers,
                    topLanguages,
                });
            } catch (err) {
                console.error("Error fetching GitHub stats:", err);
                setError(err.message);
                // Set fallback data for development
                setStats({
                    publicRepos: 0,
                    stars: 0,
                    forks: 0,
                    followers: 0,
                    topLanguages: [],
                });
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, []);

    return (
        <div className={styles.statBox}>
            <h3 className={styles.statTitle}>github</h3>
            {loading ? (
                <div className={styles.loading}>loading...</div>
            ) : error ? (
                <div className={styles.error}>unable to load stats</div>
            ) : stats ? (
                <>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>repos:</span>
                        <span className={styles.statValue}>{stats.publicRepos}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>stars:</span>
                        <span className={styles.statValue}>{stats.stars}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>forks:</span>
                        <span className={styles.statValue}>{stats.forks}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>followers:</span>
                        <span className={styles.statValue}>{stats.followers}</span>
                    </div>
                    {stats.topLanguages.length > 0 && (
                        <div className={styles.statRow}>
                            <span className={styles.statLabel}>top langs:</span>
                            <span className={styles.statValue}>
                                {stats.topLanguages.map(l => l.lang).join(", ")}
                            </span>
                        </div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default GitHubStats;

