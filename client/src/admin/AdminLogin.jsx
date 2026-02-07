import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"; 

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit">OK</button>
          </div>
        </form>
        {error && <p className="admin-error">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
