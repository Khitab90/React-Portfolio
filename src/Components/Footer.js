import { FaInstagram, FaGit, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: test@email.com</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className="social-icons">
          <a href="https://www.github.com/Khitab90">
            <i>
              <FaGit />
            </i>
          </a>
          <a href="https://www.instagram.com/">
            <i>
              <FaInstagram />
            </i>
          </a>
          <a href="https://www.linkedin.com">
            <i>
              <FaLinkedin />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
