import "./Footer.css";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <h3 className="logo">MyShop</h3>
        <p>
          Votre boutique en ligne pour découvrir les meilleurs produits.
        </p>
        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <hr />
        <p className="copyright">
          © 2026 MyShop - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;