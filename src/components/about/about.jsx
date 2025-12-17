import styles from "./about.module.css";
import CurrentlySection from "./currently/currently";
import SkillsSection from "./skills/skills";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <CurrentlySection />
      <SkillsSection />
    </section>
  );
};

export default About;
