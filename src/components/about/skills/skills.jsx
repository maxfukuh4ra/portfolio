import React from "react";
import styles from "./skills.module.css";
import skillsData from "../../../data/skills.json";
import { getImageUrl } from "../../../utils";

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Languanges / Technologies</h2>
      <p className={styles.subtitle}>Here are the tools, languages, and frameworks I work with regularly:</p>

      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img
              src={getImageUrl(skill.imageSrc)}
              alt={`${skill.name} logo`}
              className={styles.skillLogo}
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
