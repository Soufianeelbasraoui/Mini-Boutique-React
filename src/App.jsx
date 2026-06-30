
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import productsData from "./data/productsData.json"
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'

function App() {

  const[products, setProducts]=useState(productsData)

  return (
  
  <div>
   <Header/>
   <ProductList products={products}/>
   
   <Footer/>
  </div>
    
      
  
  )
}

export default App
