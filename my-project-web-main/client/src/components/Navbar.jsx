import { Link, useNavigate, useLocation } from "react-router-dom"; // Thêm useLocation
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Giữ lại để dùng ở trang Profile nếu cần
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/disney-logo.png" alt="Disney" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className="separator" />

        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li><Link to="/profile">My Account</Link></li>
        )}
      </ul>
    </nav>
  );
}