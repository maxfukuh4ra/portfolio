import styles from "./about.module.css";
import ExperienceTimeline from "./experience/experience";
import EducationSection from "./education/education";
import CurrentlySection from "./currently/currently";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <CurrentlySection />
      <ExperienceTimeline />
      <EducationSection />
    </section>
  );
};

export default About;
