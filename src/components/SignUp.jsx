// src/pages/SignUp.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">

      <div className="form-container">
        <form className="signup-form">
        <h2 className='text-center'>SignUp</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" required />

          <button type="submit" className="signup-btn">Sign Up</button>

          <div className="social-signup">
            <p>or sign up with</p>
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>

          <div className="SignIn">
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
