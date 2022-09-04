import React, { useContext } from 'react';
import { authContextObject } from '../../../Contexts/AuthContext';
import './UserDetailsList.css';

function UserDetailsList() {
  const authContextProvider = useContext(authContextObject);

  function sendingVerificationLink() {
    if (authContextProvider.user.emailVerified === true) {
      alert('User email is already verified!');
      return;
    }
    authContextProvider.verifyEmail();
  }

  return (
    <ul className="detailsList">
      <li>
        <span>User Id:</span> {authContextProvider.user.uid}
      </li>
      <li>
        <span>Email:</span> {authContextProvider.user.email}
      </li>
      <li>
        <span>Email Verified:</span>{' '}
        {authContextProvider.user.emailVerified ? 'Verified' : 'Not Verified'}
      </li>
      <button onClick={sendingVerificationLink}>
        Send Email Verification Link
      </button>
    </ul>
  );
}

export default UserDetailsList;
