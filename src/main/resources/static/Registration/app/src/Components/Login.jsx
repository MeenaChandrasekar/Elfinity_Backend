import React, { useState } from "react";
import "./Login.css"; // Import CSS file for styling

export const Login = (props) => {
        
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({});
    let vall=0;
    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear previous errors
        setErrors({});
        // Validate email
        if (!email.trim()) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Email is required.'
            }));
        } else if (!/^[^\s@]+@gmail\.com$/.test(email.toLowerCase())) {
            vall=1;
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Email is invalid or Email must end with "gmail.com".'
            }));
        }

        // Validate password
        if (!pass.trim()) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Password is required.'
            }));
        }

        // Check if any field is empty
        if (!email.trim() || !pass.trim()) {
            setErrors(prevErrors => ({
                ...prevErrors,
                emptyFields: ''
            }));
            return; // Stop further execution if any field is empty
        }

        // If there are errors, stop further execution
        if (Object.keys(errors).length > 0) {
            return;
        }

        // Add authentication logic here 
        // For demonstration purposes, simply logging the email and password
        console.log(email, pass);
        

        if(vall===0){
            alert("Login successful");

        }
        
        
    }

    return (
        <div className="auth-form-container" style={{ padding: "20px 40px" }}>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit} style={{ padding: "10px 0", marginBottom: "10px", borderRadius: "20px" }}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {errors.password && <p className="error-message">{errors.password}</p>}

                {errors.emptyFields && <p className="error-message">{errors.emptyFields}</p>}

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
}
