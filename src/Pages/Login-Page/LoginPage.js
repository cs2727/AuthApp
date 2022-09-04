import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { authContextObject } from '../../Contexts/AuthContext';

function LoginPage() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const authContextProvider = useContext(authContextObject);
  const userStatus = authContextProvider.user;
  const emailInput = useRef();
  const passwordInput = useRef();

  function submitHandler(eventInstance) {
    eventInstance.preventDefault();

    const logInMessage = authContextProvider.loginUser(
      'Login',
      emailInput.current.value,
      passwordInput.current.value
    );

    if (logInMessage === 'auth/wrong-password') {
      setLoginError(true);
    }
  }

  function resettingPassword() {
    navigate('/ResetPassword', { replace: true });
  }

  return (
    <div className="LoginContainer">
      <h1>Login Page</h1>
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
        <a href="#" onClick={resettingPassword}>
          Reset Password
        </a>
        <input type="submit" value="Log In" className="btn" />
        {loginError && <p>Incorrect Password</p>}
      </form>
    </div>
  );
}

export default LoginPage;
