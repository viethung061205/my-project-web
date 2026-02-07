import React from "react";
import "./Admin.css";

const ShoppingManagement = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Management</h1>
      <p>This section lets admins manage product listings, orders, and inventory.</p>

      <table className="booking-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#ORD101</td>
            <td>Alice</td>
            <td>Mickey Cap</td>
            <td>2</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>#ORD102</td>
            <td>Bob</td>
            <td>Disney Hoodie</td>
            <td>1</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingManagement;
