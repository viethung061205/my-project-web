import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
<<<<<<< HEAD
import  { useState } from 'react';
import Products from './components/products/Products.jsx'
=======
import ProductsMan from './pages/Products-man.jsx'
import ProductsWoman from './pages/Products-woman.jsx'
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import DetailF from './components/products/detail.jsx'

function App() {
   const [selectedId] = useState(null); 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/home/:id" element={<Home />} />
        <Route path="/products" element={<Products />} />
=======
        <Route path="/products/man" element={<ProductsMan />} />
        <Route path="/products/woman" element={<ProductsWoman />} />
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/:id/products" element={<Products />} />
        <Route path ="/home/:id/products/:pid" element ={ <DetailF id ={selectedId}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
