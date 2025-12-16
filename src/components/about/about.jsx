import styles from "./about.module.css";
import EducationSection from "./education/education";
import CurrentlySection from "./currently/currently";
import SkillsSection from "./skills/skills";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <CurrentlySection />
      <SkillsSection />
      <EducationSection />
    </section>
  );
};

export default About;
