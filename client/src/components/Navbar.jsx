import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="/disney-logo.png" alt="Disney" /></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className="separator" />
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
