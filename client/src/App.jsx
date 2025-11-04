import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductsMan from './pages/Products-man.jsx'
import ProductsWoman from './pages/Products-woman.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/man" element={<ProductsMan />} />
        <Route path="/products/woman" element={<ProductsWoman />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
