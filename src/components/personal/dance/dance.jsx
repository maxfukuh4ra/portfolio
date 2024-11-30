import React, { useEffect, useState } from "react";
import styles from "./Dance.module.css";
import danceData from "../../../data/dance.json";

const DancePage = () => {
  const [danceVideos, setDanceVideos] = useState([]);

  useEffect(() => {
    setDanceVideos(danceData);
  }, []);

  return (
    <div className={styles.danceContainer}>
      {danceVideos.map((video, index) => (
        <div key={index} className={styles.danceCard}>
          {/* Use videoId for the thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={`${video.title} thumbnail`}
            className={styles.danceImage}
          />
          <h3 className={styles.danceTitle}>{video.title}</h3>
          <p className={styles.danceDescription}>{video.description}</p>
          <div className={styles.danceLinks}>
            <a
              href={video.wideView}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.danceLink}
            >
              Wide View
            </a>
            <a
              href={video.frontView}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.danceLink}
            >
              Front View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DancePage;
