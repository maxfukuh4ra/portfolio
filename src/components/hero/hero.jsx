import styles from "./hero.module.css";
import Typed from "react-typed";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileWrapper}>
          <img
            src={getImageUrl("about/headshot.png")}
            alt="Profile"
            className={styles.profilepic}
          />
          <span className={styles.waveEmoji}>👋</span>
        </div>

        <h1 className={styles.title}>Hi, I'm Max Fukuhara</h1>

        <div className={styles.tagline}>
          <span className={styles.taglineText}>Developer &</span>
          <Typed
            strings={[
              "CS student at UCLA",
              "aspiring software engineer",
              "aspiring product manager",
              "retired soccer player",
              "intramural tennis demon",
              "surfer and snowboarder",
              "community dancer",
              "big foodie",
              "dog lover",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className={styles.taglineHighlight}
          />
        </div>

        <div className={styles.experience}>
          <div className={styles.experienceItem}>
            <span className={styles.experienceIcon}>💼</span>
            <span>Prev. Software Engineer (Security) Intern at EY</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.experienceIcon}>🔬</span>
            <span>Software Engineer at BruinWalk</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.experienceIcon}>🎓</span>
            <span>UCLA Samueli School of Engineering '26</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.buttonRow}>
            <a href="/portfolio/contact" className={styles.contactBtn}>
              Contact Me
            </a>
            <a href="https://go.elpha.ai/8ZuA3Tp" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              View Resume
            </a>
          </div>
          <p className={styles.status}> ◆ Available for Work</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
