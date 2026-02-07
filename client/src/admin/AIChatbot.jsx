import React from "react";
import "./Admin.css";

const AIChatbot = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chatbot Center</h1>
      <p>Monitor and analyze user chatbot interactions here.</p>

      <ul style={{ marginTop: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
        <li>“What should I buy?” — 120 uses</li>
        <li>“Compare ticket types” — 95 uses</li>
        <li>“Any promotions now?” — 78 uses</li>
      </ul>
    </div>
  );
};

export default AIChatbot;
