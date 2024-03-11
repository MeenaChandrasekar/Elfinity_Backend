// Button.js
import React from "react";
import "./Button.css"; 

function Button({ toggleForm }) {
  return (
    <div className="button-container">
      <button onClick={() => toggleForm("login")}>Login</button>
      <button onClick={() => toggleForm("register")}>Register</button>
    </div>
  );
}

export default Button;
