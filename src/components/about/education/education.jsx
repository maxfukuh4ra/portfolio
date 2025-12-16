import styles from "./education.module.css";
import { getImageUrl } from "../../../utils";

const EducationSection = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>My Education</h2>
      <div className={styles.educationContent}>
        <div className={styles.educationLeft}>
          <div className={styles.educationCard}>
            <img
              src={getImageUrl("about/ucla-logo.png")}
              alt="UCLA Logo"
              className={styles.educationLogo}
            />
            <div className={styles.educationDetails}>
              <h3>University of California, Los Angeles (UCLA)</h3>
              <p>Bachelor of Science in Computer Science</p>
              <p>2022-2026</p>
              <p>GPA 3.6</p>
              <ul>
                <li>Technical Breadth in Technology Management</li>
                <li>Scientific Breadth in Psychology</li>
                <li>Switched from Cognitive Science in 2023</li>
                <li>Dean's List - 2022 & 2023</li>
              </ul>
            </div>
          </div>

          <div className={styles.educationCard}>
            <img
              src={getImageUrl("soccer/beckman.png")}
              alt="Beckman Logo"
              className={styles.educationLogo}
            />
            <div className={styles.educationDetails}>
              <h3>Arnold O. Beckman High School</h3>
              <p>High School Diploma</p>
              <p>2018-2022</p>
              <p>GPA 4.8</p>
              <ul>
                <li>SAT: 1530</li>
                <li>State Seal of Triliteracy (English, Japanese, Spanish)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.educationRight}>
          <h3>Relevant Coursework:</h3>
          <ul>
            <li>CS 181 - Theory of Computing</li>
            <li>CS 180 - Algorithms and Complexity</li>
            <li>CS 163 - Deep Learning for Computer Vision</li>
            <li>CS M152A - Digital Design Laboratory</li>
            <li>CS M148 - Data Science and Machine Learning</li>
            <li>CS 143 - Database Management System</li>
            <li>CS 136 - Computer Security</li>
            <li>CS 131 - Programming Languages</li>
            <li>CS 118 - Computer Network Fundamentals</li>
            <li>EC ENGR M116C - Computer Systems Architecture</li>
            <li>CS 111 - Operating Systems Principles</li>
            <li>CS M51A - Digital Design Laboratory</li>
            <li>CS 35L - Software Construction Laboratory</li>
            <li>CS 33 - Computer Organization</li>
            <li>
              CS 31 & 32 - Intro to Computer Science and Objected Oriented
              Programming
            </li>
            <li> MATH 170E: Introduction to Probability and Statistics </li>
            <li> MATH 33A & 33B: Linear Algebra and Differential Equations </li>
            <li> MATH 32A & 32B: Multivariable Calculus </li>
            <li> MATH 31A & 31B: Calculus: Differential and Integration, Infinite Series </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
