
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import productsData from "./data/productsData.json"
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import Home from './components/Home/Home'

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
    <BrowserRouter>
    <Header cart={cart} setShowCart={setShowCart}/>
    <Routes>
      <Route path='/Home' element={<Home products={products} addToCart={addToCart}/>}/>
      <Route path='/ProductList' element={<ProductList products={products} addToCart={addToCart}/>}/>
      <Route path='/AddProduc' element={<AddProduct/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

   {showCart && (
  <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    setShowCart={setShowCart}
  />
)}
  
  </div>
    
      
  
  )
}

export default App
