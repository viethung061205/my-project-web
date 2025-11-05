import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

import Products from './components/products/Products.jsx'
import ProductsMan from './pages/Products-man.jsx'
import ProductsWoman from './pages/Products-woman.jsx'

import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import DetailF from './components/products/detail.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />

        {/* Danh mục */}
        <Route path="/products/man" element={<ProductsMan />} />
        <Route path="/products/woman" element={<ProductsWoman />} />
        <Route path="/products" element={<Products />} />

        {/* ✅ Route xem chi tiết */}
        <Route path="/products/man/:id" element={<DetailF />} />
        <Route path="/products/woman/:id" element={<DetailF />} />

        {/* Khác */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
