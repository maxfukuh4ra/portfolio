import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const SERVICE_ID = "service_z87yhqc";
  const TEMPLATE_ID = "template_stu4k5o";
  const PUBLIC_KEY = "5JdtBHHlCbBWqxZau";

  // init EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("EmailJS success:", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");

      // error msg
      if (error.text) {
        setErrorMessage(error.text);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Failed to send message. Please check your EmailJS configuration.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>contact</h2>
        <p>feel free to reach out!</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="your message..."
            rows="5"
            required
          />
        </div>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            message sent successfully! i'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            {errorMessage || "something went wrong. please try again or email me directly."}
          </div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "sending..." : "send"}
        </button>
      </form>

      <div className={styles.divider}></div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:maxfuku04@g.ucla.edu" target="_blank" rel="noopener noreferrer">
            email
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/max-fukuhara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a
            href="https://github.com/maxfukuh4ra"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
