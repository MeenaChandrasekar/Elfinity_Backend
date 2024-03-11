// App.js
import React, { useState } from "react";
import "./App.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import Home from "./Components/Home";


function App() {
  const [currentForm, setCurrentForm] = useState("home");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      
      {currentForm === "home" && <Home toggleForm={toggleForm} />}
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : null}
      
    </div>
  );
}

export default App;
