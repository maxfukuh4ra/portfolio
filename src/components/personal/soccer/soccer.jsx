import React from "react";
import styles from "./Soccer.module.css";
import { getImageUrl } from "../../../utils";

const Soccer = () => {
  const highlights = [
    {
      title: "U19 MLS NEXT Highlights",
      videoId: "EEobwtfKncI",
      url: "https://youtu.be/EEobwtfKncI?si=E-ZUh6S2tA-kRr6f",
      description:
        "MLS NEXT FLEX Southwest Conference Champion (Record: 9-1-1)",
    },
    {
      title: "U17 ECNL & High School Highlights",
      videoId: "dTtUdHJ5PsY",
      url: "https://youtu.be/dTtUdHJ5PsY?si=0RnCetoD7qfFUm5i",
      description:
        "2021 ECNL National Playoff Semifinalist. \n Runner-up 2021 Surf Cup Best of the Best Division",
    },
    {
      title: "U16 Highlights",
      videoId: "_qjHEvz6C3A",
      url: "https://youtu.be/_qjHEvz6C3A?si=2_H0kLzEd5TlF3XJ",
      description:
        "Highschool + DA (gap year). All games started, full minutes played on varsity. U16 DA gap year season cut short due to COVID",
    },
  ];

  const progression = [
    {
      title: "National Premier Leagues",
      imgSrc: getImageUrl("soccer/npl.avif"),
    },
    {
      title: "High School Varsity",
      imgSrc: getImageUrl("soccer/beckman.png"),
    },
    {
      title: "USSDA",
      imgSrc: getImageUrl("soccer/da.png"),
    },
    {
      title: "ECNL",
      imgSrc: getImageUrl("soccer/ecnl.png"),
    },
    {
      title: "MLS NEXT",
      imgSrc: getImageUrl("soccer/mlsnext.png"),
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Soccer Highlights</h1>
        <p className={styles.subtitle}>
          As someone who only started club soccer in 2018, climbing up to the
          top rank in the US Youth Soccer pyramid was a challenge, but I'm proud
          of what I've accomplished.<br /> Here are some of my highlights from my
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
        <h2 className={styles.progressionHeading}>League Progression</h2>
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
