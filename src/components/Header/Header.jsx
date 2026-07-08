import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cart, setShowCart }) {
  return (
    <header className="header-bar shadow-sm bg-white py-3">
      <div className="container">
        <div className="row align-items-center">

          {/* Logo */}
          <div className="col-3">
            <Link to="/" className="text-decoration-none">
              <h3 className="m-0 fw-bold text-dark">My<span className="text-primary">Shop</span></h3>
            </Link>
          </div>

          {/* Navigation */}
          <div className="col-6">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  Produits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add-product"
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  Ajouter
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Panier */}
          <div className="col-3 text-end">
            <div className="cart-icon" onClick={() => setShowCart(true)}>
              <FaShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="badge-cart">{cart.length}</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;