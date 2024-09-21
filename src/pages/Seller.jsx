// src/pages/Seller.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SignIn from '../components/SignIn';  // Import SignIn component
import SignUp from '../components/SignUp';  // Import SignUp component
import './Seller.css'; // Import Seller-specific CSS
import Swal from 'sweetalert2';  // Correctly import SweetAlert2

const Seller = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevent page refresh
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === 'admin' && password === 'admin') {
            Swal.fire({
                title: 'Welcome to the dashboard',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                // Redirect to SellerControl.jsx
                window.location.href = '/SellerControl';
            });
        } else {
            Swal.fire({
                title: 'Invalid login',
                text: 'Please check your credentials',
                icon: 'error',
            });
        }
    };

    return (
        <div className="seller-page">
            <div className="btn">
            <Link to="/">
        <button type="button" className="buttonHome">Home</button>
      </Link>
            </div>
            <div className="seller-auth-forms">
                {isSignIn ? (
                    <div className="sign-in-section">
                        <h2>Sign In to Become a Seller</h2>
                        <p>Username: 'admin' && Password: 'admin'</p>
                        <SignIn onSignIn={handleSignIn} />
                    </div>
                ) : (
                    <div className="sign-up-section">
                        <h2>Sign Up to Become a Seller</h2>
                        <SignUp />
                    </div>
                )}
            </div>

        </div>
    );
};

export default Seller;
