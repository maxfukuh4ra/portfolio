import React from "react";
import "./footer.modules.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Me</h2>
          <p>Brief description about yourself or your portfolio.</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Me</h2>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add other social media links as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
