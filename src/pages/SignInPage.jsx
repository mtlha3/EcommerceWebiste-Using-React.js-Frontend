// src/pages/SignIn.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/SignIn'; // Ensure the import path is correct
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div>
      <h1 className='text-center bg-secondary'>Welcome to Apni Dukan. Hope you are going to enjoy our services.</h1>
      <div className="btn">

      <Link to="/">
        <button type="button" className="buttonHome">Home</button>
      </Link>
      </div>
      <SignIn />
    </div>
  );
};

export default SignInPage; // Make sure the export matches the import in App.jsx
