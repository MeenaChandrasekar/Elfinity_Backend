import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    address: "",
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

    // Perform validation and set errors as needed

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("YOUR_API_ENDPOINT", formData);
        console.log("Registration successful:", response.data);
        // Handle successful registration response as needed
      } catch (error) {
        console.error("Registration error:", error);
        // Handle error from API request
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Form fields... */}
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
