import './Footer.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container text-center">
        <h4 className="logo mb-2">My<span className="text-primary">Shop</span></h4>
        <p className="text-muted">
          Votre boutique en ligne pour découvrir les meilleurs produits.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <hr />
        <p className="copyright">© 2026 MyShop — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;