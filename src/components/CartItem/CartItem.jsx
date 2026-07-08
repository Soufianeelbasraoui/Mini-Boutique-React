import { IoMdTrash } from 'react-icons/io';
import './CartItem.css';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item d-flex justify-content-between align-items-center border rounded-2 p-3 mb-2">
      <div>
        <h6 className="mb-1 fw-semibold">{item.name}</h6>
        <span className="text-primary fw-bold">{item.price.toFixed(2)} DH</span>
      </div>
      <button
        className="btn btn-sm text-danger p-1"
        onClick={() => removeFromCart(item.id)}
        aria-label="Supprimer"
      >
        <IoMdTrash size={22} />
      </button>
    </div>
  );
}

export default CartItem;