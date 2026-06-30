import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="shadow-sm bg-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <h3 className="m-0 fw-bold">MyShop</h3>
          </div>
          <div className="col-6">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="#" className="nav-link">Accueil</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Produits</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">À propos</a>
              </li>
            </ul>
          </div>
          <div className="col-3 text-end">
            <div className="cart">
              <FaShoppingCart size={26} />
              <span className="badge-cart">0</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;