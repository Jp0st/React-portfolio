import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer p-3 text-center">
      <div className="container">
        <p className="mb-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          |
          <a
            href="https://github.com/Jp0st"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mx-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mx-2"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </p>
        <p className="mb-0">© 2023 John Post</p>
      </div>
    </footer>
  );
}