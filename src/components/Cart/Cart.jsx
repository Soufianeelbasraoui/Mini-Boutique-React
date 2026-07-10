import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart({ cart, removeFromCart, setShowCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <div className="cart-header d-flex justify-content-between align-items-center mb-4">
          <h5 className="m-0 fw-bold">Mon Panier</h5>
          <button
            className="btn-close"
            onClick={() => setShowCart(false)}
            aria-label="Fermer"
          />
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p className="mb-0">Votre panier est vide.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="text-muted">Articles</span>
              <span className="fw-semibold">{cart.length}</span>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <span className="fw-bold fs-5">Total</span>
              <span className="fw-bold fs-5 text-primary">{total.toFixed(2)} DH</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;