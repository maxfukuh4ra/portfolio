import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:maxfuku04@g.ucla.edu">maxfuku04@g.ucla.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/max-fukuhara/">https://www.linkedin.com/in/max-fukuhara/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/maxfukuh4ra">https://github.com/maxfukuh4ra</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;