import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

function Header({cart,setShowCart}) {
  return (
    <header className="shadow-sm bg-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/Home" className="nav-link">
            <h3 className="m-0 fw-bold">MyShop</h3>
            </Link>
          </div>
          <div className="col-6">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink to="/Home"  className="nav-link">Accueil </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ProductList" className="nav-link">Produits</NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/" className="nav-link">À propos</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/AddProduc" className="nav-link"> Ajouter Produit</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-3 text-end">
            <div className="cart" onClick={()=>setShowCart(true)}>
              <FaShoppingCart size={26} />
              <span className="badge-cart">{cart.length}</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;