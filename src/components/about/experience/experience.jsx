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
            {/* Dot */}
            <div className={styles.timelineDot}></div>

            {/* Date */}
            <p className={styles.timelineDate}>{job.startDate} - {job.endDate}</p>

            {/* Card */}
            <div className={styles.timelineContent}>
              <img
                src={getImageUrl(job.imageSrc)}
                alt={`${job.organisation} logo`}
                className={styles.workLogo}
              />
              <h3>{job.role}</h3>
              <p className={styles.orgName}>{job.organisation}</p>
              {job.experiences.length > 0 && (
                <ul>
                  {job.experiences.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
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
