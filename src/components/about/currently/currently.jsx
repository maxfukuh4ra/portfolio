import React from "react";
import styles from "./currently.module.css";
import { getImageUrl } from "../../../utils";
import currentlyData from "../../../data/currently.json";

const CurrentlySection = () => {
  return (
    <section className={styles.currentlySection}>
      <h2 className={styles.sectionTitle}>Currently</h2>
      <p className={styles.subtitle}>Here's what I'm actively working on:</p>

      <div className={styles.currentProjects}>
        {currentlyData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {/* Title */}
            <h4 className={styles.projectTitle}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h4>

            {/* Video */}
            {project.videoSrc ? (
              <video
                src={getImageUrl(project.videoSrc)}
                className={styles.projectVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`${project.title} logo`}
                className={styles.projectLogo}
              />
            )}

            {/* Organization */}
            <p className={styles.projectOrg}>{project.organization}</p>

            {/* Description */}
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlySection;
