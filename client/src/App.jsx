import { Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import BookingDetail from "./pages/booking/BookingDetail";
import BookingCheckout from './components/BookingCheckout';
import BookingForm from './components/BookingForm';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  
  return (
    <>
    <Navbar />
    <div className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/:location" element={<BookingDetail />} />
      <Route path="/booking/:location/checkout" element={<BookingCheckout />} />
      <Route path="/booking/:location/form" element={<BookingForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
