import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({}); // Clear previous errors when any input is changed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/register", formData); // Assuming your API endpoint is '/api/register'
      alert("Registered successfully!");
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
