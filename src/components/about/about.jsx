import styles from "./about.module.css";
import ExperienceTimeline from "./experience/experience";
import EducationSection from "./education/education";
import CurrentlySection from "./currently/currently";
import SkillsSection from "./skills/skills";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <CurrentlySection />
      <ExperienceTimeline />
      <SkillsSection />
      <EducationSection />
    </section>
  );
};

export default About;
