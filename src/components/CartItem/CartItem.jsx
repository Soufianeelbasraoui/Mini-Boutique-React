
import { IoMdTrash } from "react-icons/io";
import "./CartItem.css"
function CartItem({item,removeFromCart}){
    return(
        <div className="d-flex justify-content-between border p-3 mb-2">
            <div>
               <h6>{item.name}</h6>
               <p>{item.price} DH</p>
            </div>
              <div className="text-danger delet" onClick={() => removeFromCart(item.id)}>
                <IoMdTrash  className="icons"/>
              </div>

        </div>
    )
}
export default CartItem;