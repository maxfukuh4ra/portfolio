import styles from "./about.module.css";
import ExperienceTimeline from "./experience/experience";
import EducationSection from "./education/education";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <EducationSection /> 
      <ExperienceTimeline /> 
    </section>
  );
};

export default About;