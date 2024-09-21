// src/pages/SignUp.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp'; // Ensure the import path is correct
import './SignInPage.css';

const SignUpPage = () => {
  return (
    <div>
      <h1 className='text-center bg-secondary'>SignUp to our Ecommerce store to avail thousands of gifts, sale and many more. Register Now</h1>
      <div className="btn">

<Link to="/">
  <button type="button" className="buttonHome">Home</button>
</Link>
</div>
      <SignUp />
    </div>
  );
};

export default SignUpPage; // Make sure the export matches the import in App.jsx
