import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart({ cart, removeFromCart, setShowCart }) {
  const total = cart.reduce( (sum, item) => sum + item.price, 0);
  return (
    <div className="cart-box">
      <button className="btn btn-danger mb-3" onClick={() => setShowCart(false)}>X</button>
      <h2>Mon Panier</h2>
      {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <>
            {
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))
            }
            <hr />
            <h4>Total : {total.toFixed(2)} DH</h4>
          </>
        )
      }

    </div>
  );
}

export default Cart;