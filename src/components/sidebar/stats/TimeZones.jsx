import React, { useState, useEffect } from "react";
import styles from "./statBox.module.css";

const TimeZones = () => {
    const [times, setTimes] = useState({});

    useEffect(() => {
        const cities = [
            { name: "los angeles", tz: "America/Los_Angeles" },
            { name: "new york city", tz: "America/New_York" },
            { name: "tokyo", tz: "Asia/Tokyo" },
            { name: "seoul", tz: "Asia/Seoul" },
        ];

        const updateTimes = () => {
            const newTimes = {};
            cities.forEach((city) => {
                const time = new Date().toLocaleTimeString("en-US", {
                    timeZone: city.tz,
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });
                newTimes[city.name] = time;
            });
            setTimes(newTimes);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = () => {
        return new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        }).toLowerCase();
    };

    return (
        <div className={styles.statBox}>
            <h3 className={styles.statTitle}>time</h3>
            <div className={styles.timeDate}>{formatDate()}</div>
            <div className={styles.timeZones}>
                {Object.entries(times).map(([city, time]) => (
                    <div key={city} className={styles.timeRow}>
                        <span className={styles.timeCity}>{city}:</span>
                        <span className={styles.timeValue}>{time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeZones;

