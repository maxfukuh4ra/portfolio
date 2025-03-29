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
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <img src={getImageUrl(job.imageSrc)} alt={`${job.organisation} logo`} className={styles.workLogo} />
              <div>
                <h3>{job.role}</h3>
                <p className={styles.orgName}>{job.organisation}</p>
                <p className={styles.date}>{job.startDate} - {job.endDate}</p>
                {job.experiences.length > 0 && (
                  <ul>
                    {job.experiences.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
