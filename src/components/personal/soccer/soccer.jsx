import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./soccer.module.css";
import { getImageUrl } from "../../../utils";

const Soccer = () => {
  const navigate = useNavigate();
  const highlights = [
    {
      title: "u19 mls next highlights",
      videoId: "EEobwtfKncI",
      url: "https://youtu.be/EEobwtfKncI?si=E-ZUh6S2tA-kRr6f",
      description:
        "mls next flex southwest conference champion (record: 9-1-1)",
    },
    {
      title: "u17 ecnl & high school highlights",
      videoId: "dTtUdHJ5PsY",
      url: "https://youtu.be/dTtUdHJ5PsY?si=0RnCetoD7qfFUm5i",
      description:
        "2021 ecnl national playoff semifinalist. \n runner-up 2021 surf cup best of the best division",
    },
    {
      title: "u16 highlights",
      videoId: "_qjHEvz6C3A",
      url: "https://youtu.be/_qjHEvz6C3A?si=2_H0kLzEd5TlF3XJ",
      description:
        "highschool + da (gap year). all games started, full minutes played on varsity. u16 da gap year season cut short due to covid",
    },
  ];

  const progression = [
    {
      title: "national premier leagues",
      imgSrc: getImageUrl("soccer/npl.avif"),
    },
    {
      title: "high school varsity",
      imgSrc: getImageUrl("soccer/beckman.png"),
    },
    {
      title: "ussda",
      imgSrc: getImageUrl("soccer/da.png"),
    },
    {
      title: "ecnl",
      imgSrc: getImageUrl("soccer/ecnl.png"),
    },
    {
      title: "mls next",
      imgSrc: getImageUrl("soccer/mlsnext.png"),
    },
  ];

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/portfolio/personal")}>
        ← back
      </button>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>soccer highlights</h1>
        <p className={styles.subtitle}>
          as someone who only started club soccer in 2018, climbing up to the
          top rank in the us youth soccer pyramid was a challenge, but i'm proud
          of what i've accomplished.<br /> here are some of my highlights from my
          prime:
        </p>
      </div>

      {/* Highlights Section */}
      <div className={styles.highlights}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.linkCard}>
            <a
              href={highlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbnailLink}
            >
              <img
                className={styles.thumbnail}
                src={`https://img.youtube.com/vi/${highlight.videoId}/hqdefault.jpg`}
                alt={`${highlight.title} Thumbnail`}
              />
              <h3 className={styles.linkTitle}>{highlight.title}</h3>
            </a>
            <p className={styles.linkDescription}>{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Progression Section */}
      <div className={styles.progression}>
        <h2 className={styles.progressionHeading}>league progression</h2>
        <div className={styles.progressionRow}>
          {progression.map((league, index) => (
            <React.Fragment key={index}>
              {/* League Image and Title */}
              <div className={styles.progressionItem}>
                <img
                  src={league.imgSrc}
                  alt={league.title}
                  className={styles.progressionImage}
                />
                <p className={styles.progressionTitle}>{league.title}</p>
              </div>
              {/* Arrow (not after the last item) */}
              {index !== progression.length - 1 && (
                <div className={styles.arrow}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soccer;
