import "./footer.modules.css";
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={getImageUrl("misc/logo.png")} alt="Logo" className="footer-logo" />
      <p>&copy; 2024 - Max Fukuhara</p>
    </footer>
  );
};

export default Footer;
