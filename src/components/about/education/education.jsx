import styles from "./education.module.css";
import { getImageUrl } from "../../../utils";

const EducationSection = () => {
  return (    
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>My Education</h2>
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
          <p>GPA 3.7</p>
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
    </section>
  );
};

export default EducationSection;