import React, { useState, useRef, useContext } from 'react';
import './SignUpPage.css';
import { authContextObject } from '../../Contexts/AuthContext';

export default function SignUpPage() {
  const [loginError, setLoginError] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const authContextProvider = useContext(authContextObject);

  function submitHandler(eventInstance) {
    eventInstance.preventDefault();

    if (passwordInput.current.value === confirmPasswordInput.current.value) {
      authContextProvider.createUser(
        'SignUp',
        emailInput.current.value,
        passwordInput.current.value
      );
    } else {
      setLoginError(true);
    }
  }

  return (
    <div className="SignUpContainer">
      <h1>Signing Up</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email-Label">Email:</label>
        <input type="text" id="email-Label" ref={emailInput} required />

        <label htmlFor="password-Label">Password:</label>
        <input
          type="password"
          id="password-Label"
          ref={passwordInput}
          required
        />

        <label htmlFor="confirmPassword-Label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword-Label"
          ref={confirmPasswordInput}
          required
        />

        {loginError && <p className="errorMessage">Passwords do not match</p>}
        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </div>
  );
}
