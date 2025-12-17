import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./personal.module.css";

const Personal = () => {
  const navigate = useNavigate();

  const hobbies = [
    {
      title: "soccer",
      description: "my once super serious hobby",
      icon: "⚽",
      route: "/portfolio/personal/soccer",
    },
    {
      title: "dance",
      description: "something cool i started in college",
      icon: "🕺",
      route: "/portfolio/personal/dance",
    },
    {
      title: "media portfolio",
      description: "my works revolving flyers and video production",
      icon: "🎥",
      route: "/portfolio/personal/media",
    },
    {
      title: "side hustles",
      description: "some random cool things i've done on the side",
      icon: "💸",
      route: "/portfolio/personal/side",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>about me</h2>
      <p className={styles.subtitle}>
        click to see some of my favorite hobbies:
      </p>
      <div className={styles.cardContainer}>
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => navigate(hobby.route)}
          >
            <div className={styles.icon}>{hobby.icon}</div>
            <h3 className={styles.cardTitle}>{hobby.title}</h3>
            <p className={styles.cardDescription}>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
