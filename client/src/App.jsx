import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

import  { useState } from 'react';
import Products from './components/products/Products.jsx'


import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import DetailF from './components/products/detail.jsx'

import ErrorBoundary from './bound.jsx';
function App() {
   const [selectedId] = useState(null); 

  return (
    <BrowserRouter>
      <Navbar />
        <ErrorBoundary>    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/:id" element={<Home />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/:id/products" element={<Products />} />
            <Route path ="/home/:id/products/:pid" element ={ <DetailF id ={selectedId}/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
