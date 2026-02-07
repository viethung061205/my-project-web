import { Routes, Route } from 'react-router-dom';
import './index.css';
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
import BookingConfirm from './components/BookingConfirm';
import Shop from './pages/Shop'; 

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import BookingManagement from "./admin/BookingManagement"; 
import ShoppingManagement from "./admin/ShoppingManagement"; 
import AIChatbot from "./admin/AIChatbot";
import AdminLayout from "./admin/AdminLayout"; 

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* USER PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:location" element={<BookingDetail />} />
          <Route path="/booking/:location/checkout" element={<BookingCheckout />} />
          <Route path="/booking/:location/form" element={<BookingForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/booking/:location/confirm" element={<BookingConfirm />} />
          <Route path="/shop" element={<Shop />} />

          {/* ADMIN PAGES */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="booking" element={<BookingManagement />} />
            <Route path="shopping" element={<ShoppingManagement />} />
            <Route path="chatbot" element={<AIChatbot />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
