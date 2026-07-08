import { useState } from 'react';
import Header from './components/Header/Header';
import productsData from './data/productsData.json';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <BrowserRouter>
      <Header cart={cart} setShowCart={setShowCart} />
      <Routes>
        <Route path='/' element={<Home products={products} addToCart={addToCart} />} />
        <Route path='/products' element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path='/add-product' element={<AddProduct addProduct={addProduct} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      
      {showCart && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          setShowCart={setShowCart}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
