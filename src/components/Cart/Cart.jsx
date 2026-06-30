import CartItem from "../CartItem/CartItem";


function Cart({cart,removeFromCart}){

    const total=cart.reduce((sum,item)=>sum+item.price,0)
    return(
        <div className="container mt-5">
            <h2>Mon Panier</h2>
            {
              cart.length===0 ?
              (<h2>votre panier est vide</h2>):(
                <>
                {cart.map((item)=>(
                    <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    
                    />
                ))}
                 <h4>Total : {total.toFixed(2)} DH</h4>
                </>
              )
              
            }

        </div>
    )
}
export default Cart;