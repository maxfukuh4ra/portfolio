import React from "react";
import styles from "./currently.module.css";
import { getImageUrl } from "../../../utils";
import currentlyData from "../../../data/currently.json";

const CurrentlySection = () => {
  return (
    <section className={styles.currentlySection}>
      <h2 className={styles.sectionTitle}>Currently</h2>
      <p className={styles.subtitle}>Here's what I'm actively working on and learning:</p>

      <div className={styles.currentlyGrid}>

        {/* Left Side - Projects */}
        <div className={styles.currentProjects}>
          <h3>Building:</h3>
          {currentlyData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`${project.title} logo`}
                className={styles.projectLogo}
              />
              <div>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectOrg}>{project.organization}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Coursework */}
        <div className={styles.currentCourses}>
          <h3>Coursework:</h3>
          <ul>
            <li>CS 131 - Programming Languages</li>
            <li>CS 136 - Computer Security</li>
            <li>CS 181 - Theory of Computing</li>
          </ul>
          <h3>Past Coursework:</h3>
          <ul>
            <li>CS 118 - Computer Network Fundamentals</li>
            <li>CS 143 - Database Management Systems</li>
            <li>CS 111 - Operating Systems Principles</li>
            <li>CS M148 - Intro to Data Science and Machine Learning</li>
            <li> MATH 170E - Probability</li>
            <li>CS 33 - Intro to Computer Organization</li>
            <li>CS 31 & 32 - Intro to Computer Science</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CurrentlySection;