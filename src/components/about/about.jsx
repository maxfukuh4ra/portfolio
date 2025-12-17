import styles from "./about.module.css";
import CurrentlySection from "./currently/currently";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <CurrentlySection />
    </section>
  );
};

export default About;
