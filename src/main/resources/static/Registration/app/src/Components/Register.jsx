
import React, { useState } from "react";
import "./Register.css";

export const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({}); // Clear previous errors when any input is changed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required.';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@gmail\.com$/.test(formData.email.toLowerCase())) {
            validationErrors.email = 'Invalid email address or Email must end with @gmail.com.';
        }

        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Phone number must be 10 digits.';
        }

        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        }

        if (!formData.confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirm Password is required.';
        }

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Registered successfully!");
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                city: '',
                state: '',
                address: '',
                password: '',
                confirmPassword: ''
            });
        } else {
            window.scrollTo(0, 0);
        }
    };

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
        'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
    ];

    return (
        <div className="auth-form-container" style={{ padding: "20px 40px" }}> 
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={formData.name} name="name" onChange={handleChange} placeholder="Full Name" />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <input value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" name="email" />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <input value={formData.phoneNumber} onChange={handleChange} type="text" placeholder="Phone Number" name="phoneNumber" />
                {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}

                <input value={formData.city} onChange={handleChange} type="text" placeholder="City" name="city" />
                {errors.city && <p className="error-message">{errors.city}</p>}

                <select value={formData.state} onChange={handleChange} name="state"  style={{ padding: "7px 0", marginBottom: "10px", borderRadius: "20px" }}>
                    <option value="">Select State</option>
                    {indianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                {errors.state && <p className="error-message">{errors.state}</p>}

                <input value={formData.address} onChange={handleChange} type="text" placeholder="Address" name="address" />
                {errors.address && <p className="error-message">{errors.address}</p>}

                <input value={formData.password} onChange={handleChange} type="password" placeholder="password" name="password" />
                {errors.password && <p className="error-message">{errors.password}</p>}

                <input value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="confirm password" name="confirmPassword" />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
};

export default Register;
