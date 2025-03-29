import React, { useEffect, useState } from "react";
import styles from "./Dance.module.css";
import danceData from "../../../data/dance.json";

const DancePage = () => {
  const [danceVideos, setDanceVideos] = useState([]);

  useEffect(() => {
    setDanceVideos(danceData);
  }, []);

  return (
    <div className={styles.dancePageContainer}>
      <h2 className={styles.sectionTitle}>Competition and Concept Videos</h2>
      <p className={styles.sectionDescription}>
        After retiring from soccer in college, dance is something that I picked up and now find a passion.
        From learning my first choreography at Foundations Choreography, I now have experience as a competitive dancer
        on Samahang Modern as well as a Media Producer on their leadership board. Although I am no longer on Samahang Modern
        to focus on my studies, I hope to be able to continue dancing in a recreational or once again in a competitive space
        on one of the many teams in the LA/OC area.
      </p>
      <div className={styles.danceContainer}>
        {danceVideos.map((video, index) => (
          <div key={index} className={styles.danceCard}>
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
    </div>
  );
};

export default DancePage;
