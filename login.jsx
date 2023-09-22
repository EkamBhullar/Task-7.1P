import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

import { Link } from 'react-router-dom'
import { signinAuthUserWithEmailAndPassword } from './utils/firebase'
function Login() {
  const navigate = useNavigate();

  const [contact, setcontact] = useState({
    email: '',
    password: ''
  })
  const { email, password } = contact
  console.log(contact)
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password)
      alert("you are logged in successfully")
      navigate('/');
      console.log('done')
      console.log(response)
    }
    catch (error) {
      console.log('error in login', error.message)
      alert("Error in Sign In")
    }
    console.log("clicked")
  }
  function handleCredentials(event) {
    const value = event.target.value
    const name = event.target.name

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })

  }
  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div className="login-container">
      <Link to='/signup'>
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </Link>
      <div className="login-form">

        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            name="email"
            type="email"
            onChange={handleCredentials}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input
            name="password"
            type="password"

            onChange={handleCredentials}
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
