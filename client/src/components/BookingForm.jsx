import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./BookingForm.css"; // nhớ import file css mới

const BookingForm = () => {
  const { location: locationId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleContinue = () => {
    if (!fullName || !phone || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate(`/booking/${locationId}/confirm`, {
      state: {
        ...state,
        customerInfo: { title, fullName, phone, email, note },
      },
    });
  };

  return (
    <div className="home">
    <div className="form-wrapper">
      <div className="form-header">
        <h2>My Reservations</h2>
        <p>Fill in the information and review your reservation</p>
        <div className="login-box">
          <img src="/gift.png" alt="Gift Icon" />
          <div>
            <strong>Log in or register to book tickets easily and get more benefits!</strong>
            <ul>
              <li>Quickly fill in information with Saved Passenger Details</li>
              <li>Enjoy exclusive deals, earn Traveloka Points and manage your bookings with ease</li>
            </ul>
            <a href="/login">Log in or register</a>
          </div>
        </div>
      </div>

      <div className="form-body">
        <h3>Customer information</h3>
        <label>Title <span>*</span></label>
        <select value={title} onChange={(e) => setTitle(e.target.value)} required>
          <option value="" disabled selected hidden></option>
          <option value="Ms.">Ms.</option>
          <option value="Mr.">Mr.</option>
        </select>

        <label>Full name <span>*</span></label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="as on ID card (no accents)" required />

        <label>Phone number <span>*</span></label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Eg: +84 901234567" required />

        <label>Email <span>*</span></label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Eg: email@example.com" required />

        <label>Additional requirements (optional)</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Any special request..." />

        <div className="summary-box">
          <h3>SUMMARY</h3>
          <div className="summary-content">
            <p><strong>The cost you have to pay</strong></p>
            <p className="highlight-text">Log in or Register to earn bonus points now! You can continue booking later as your progress is saved in the system.</p>
            <a href="/login">Log in or Register</a>
          </div>
        </div>

        <button className="continue-btn" onClick={handleContinue}>CONTINUE</button>
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
