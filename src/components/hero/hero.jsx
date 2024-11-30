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
            "aspiring designer",
            "retired soccer player",
            "average tennis player",
            "surfer and snowboarder",
            "decent dancer",
            "somewhat consistent gym rat",
            "not so decent driver",
            "big foodie",
            "dog lover",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className={styles.description}
        />
        <a href="mailto:maxfuku04@g.ucla.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.splineObject}>
      <Spline />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;