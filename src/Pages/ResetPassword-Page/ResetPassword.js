import React, { useRef, useContext } from 'react';
import { authContextObject } from '../../Contexts/AuthContext';
import './ResetPassword.css';

export default function ResetPassword() {
  const emailInput = useRef();
  const authContextProvider = useContext(authContextObject);

  function resettingPassword(eventInstance) {
    eventInstance.preventDefault();
    authContextProvider.resetPassword(emailInput.current.value);
  }

  return (
    <div className="resetPasswordContainer">
      <h1>Password Reset</h1>
      <form onSubmit={resettingPassword}>
        <label htmlFor="email-Label">Email:</label>
        <input type="email" id="email-Label" ref={emailInput} />
        <input type="submit" value="Resetting Password" />
      </form>
    </div>
  );
}
