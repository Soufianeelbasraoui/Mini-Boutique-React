
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import productsData from "./data/productsData.json"
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'

function App() {

  const[products, setProducts]=useState(productsData)
  const[cart,setCart]=useState([]);
  const[showCart,setShowCart]=useState(false);

  const addToCart=(product)=>{
    setCart([...cart,product])
  }

  const removeFromCart=(id)=>{
    setCart(cart.filter((item)=>item.id!=id))
  }
  return (
  
  <div>
   <Header cart={cart} setShowCart={setShowCart}/>
   <ProductList products={products} addToCart={addToCart}/>
   {showCart && (
  <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    setShowCart={setShowCart}
  />
)}
   <Footer/>
  </div>
    
      
  
  )
}

export default App
