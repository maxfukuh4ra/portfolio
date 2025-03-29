import "./footer.modules.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Me</h2>
          <p>
            React-based portfolio from professional experience to personal
            stories.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:maxfuku04@g.ucla.edu">maxfuku04@g.ucla.edu</a>
          </p>
          <p>Phone: 714-417-5107</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Me</h2>
          <p>
            <a
              href="https://github.com/maxfukuh4ra"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/max-fukuhara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/maxfukuh4ra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          {/* Add other social media links as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Max Fukuhara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
