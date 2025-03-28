import styles from "./hero.module.css";
import Typed  from "react-typed";
import Spline from "./spline";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Max Fukuhara</h1>
        <Typed
          strings={[
            "CS student at UCLA",
            "aspiring software engineer",
            "aspiring product manager",
            "aspiring tech consultant",
            "retired soccer player",
            "average tennis player",
            "surfer and snowboarder",
            "decent dancer",
            "somewhat consistent gym rat",
            "big foodie",
            "dog lover",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className={styles.description}
        />
        <div className={styles.buttons}>
          <a href="/portfolio/contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <p className={styles.status}> ◆ Available for Work</p>
        </div>
      </div>
      <div className={styles.splineObject}>
      <Spline />
      </div>
    </section>
  );
};

export default Hero;