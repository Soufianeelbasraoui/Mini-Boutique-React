

function CartItem({item,removeFromCart}){
    return(
        <div className="d-flex justify-content-between border p-3 mb-2">
            <div>
               <h5>{item.name}</h5>
               <p>{item.price} DH</p>
            </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
               Supprimer
              </button>

        </div>
    )
}
export default CartItem;