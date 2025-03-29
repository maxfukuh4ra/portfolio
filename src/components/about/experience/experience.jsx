import React from "react";
import styles from "./experience.module.css";
import { getImageUrl } from "../../../utils";
import workData from "../../../data/history.json";

const ExperienceTimeline = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>My Experience</h2>
      <div className={styles.timeline}>
        {workData.map((job, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>
              {job.startDate} - {job.endDate}
            </div>
            <div className={styles.timelineContent}>
              <img
                src={getImageUrl(job.imageSrc)}
                alt={`${job.organisation} logo`}
                className={styles.workLogo}
              />
              <h3>{job.role}</h3>
              <p className={styles.orgName}>{job.organisation}</p>

              {/* Work experience bullet list */}
              {job.experiences.length > 0 && (
                <ul className={styles.experienceList}>
                  {job.experiences.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
