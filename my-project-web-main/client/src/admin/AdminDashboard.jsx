import React from "react";
import "./Admin.css";

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard-top">
        <div className="stat-box">
          <p>Numbers of booking</p>
          <span>(update every 24 hours)</span>
          <h1>10</h1>
        </div>
        <div className="stat-box">
          <p>Numbers of shopping</p>
          <span>(update every 24 hours)</span>
          <h1>12</h1>
        </div>
      </div>

      <div className="best-seller-box">
        <h3>BEST SELLER OF BOOKING:</h3>
        <div className="best-row">
          <img src="https://i.pinimg.com/1200x/99/82/27/9982278ee83bf51a35add4340950a29e.jpg" />
          <p>1-day admission ticket to Disneyland Paris</p>
          <div className="total-box">
            <span>TOTAL IN THIS MONTH</span>
            <h2>25</h2>
          </div>
        </div>

        <h3>BEST SELLER OF SHOPPING:</h3>
        <div className="best-row">
          <img src="https://i.pinimg.com/1200x/99/82/27/9982278ee83bf51a35add4340950a29e.jpg" />
          <p>Sweater Mickey 05</p>
          <div className="total-box">
            <span>TOTAL IN THIS MONTH</span>
            <h2>18</h2>
          </div>
        </div>
      </div>

      <div className="ai-box">
        <h3>MOST FREQUENTLY ASKED QUESTIONS USING AI:</h3>
        <h4>TOTAL IN THIS MONTH</h4>
        <div className="ai-row">
          <p>1. What should I buy ?</p>
          <span>100</span>
        </div>
        <div className="ai-row">
          <p>2. Compare 2 products ?</p>
          <span>100</span>
        </div>
        <div className="ai-row">
          <p>3. Any promotion this month ?</p>
          <span>100</span>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
