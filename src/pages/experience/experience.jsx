import React from "react";
import { motion } from "framer-motion";

import styles from "./experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <div key={id} className={styles.historyItem}>
              <div className={styles.historyItemHeader}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.historyItemImage}
                />
                <div>
                  <h3>{`${historyItem.role} @ ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>
              </div>
              <ul className={styles.historyItemDetails}>
                {historyItem.experiences.map((experience, id) => {
                  return <li key={id}>{experience}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
