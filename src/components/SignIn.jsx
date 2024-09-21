// src/pages/SignIn.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ onSignIn }) => {
  return (
    <div className="signin-container">
      <div className="form-container">
        <form className="signin-form" onSubmit={onSignIn}>
          <h2 className='text-center'>SignIn</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="social-signin">
            <p>or sign in with</p>
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>

          <div className="signup">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
