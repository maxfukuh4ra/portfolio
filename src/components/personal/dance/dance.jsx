import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dance.module.css";
import danceData from "../../../data/dance.json";

const DancePage = () => {
  const navigate = useNavigate();
  const [danceVideos, setDanceVideos] = useState([]);

  useEffect(() => {
    setDanceVideos(danceData);
  }, []);

  return (
    <div className={styles.dancePageContainer}>
      <button className={styles.backButton} onClick={() => navigate("/portfolio/personal")}>
        ← back
      </button>
      <h2 className={styles.sectionTitle}>competition and concept videos</h2>
      <p className={styles.sectionDescription}>
        after retiring from soccer in college, dance is something that i picked up and now find a passion.
        from learning my first choreography at foundations choreography, i now have experience as a competitive dancer
        on samahang modern as well as a media producer on their leadership board. although i am no longer on samahang modern
        to focus on my studies, i hope to be able to continue dancing in a recreational or once again in a competitive space
        on one of the many teams in the la/oc area.
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
                wide view
              </a>
              <a
                href={video.frontView}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.danceLink}
              >
                front view
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DancePage;
