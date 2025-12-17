import "./footer.modules.css";
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      <ul className="footer-links">
        <li className="footer-link">
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
        <li className="footer-link">
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
        <li className="footer-link">
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
      <img src={getImageUrl("misc/logo.png")} alt="Logo" className="footer-logo" />
      <p>&copy; 2024 - Max Fukuhara</p>
    </footer>
  );
};

export default Footer;
