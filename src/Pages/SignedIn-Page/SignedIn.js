import React, { useContext } from 'react';
import { authContextObject } from '../../Contexts/AuthContext';

export default function SignedIn() {
  const authContextProvider = useContext(authContextObject);

  const userEmail = authContextProvider.user.email;

  return (
    <div>
      <p>Welcome you have successfully logged in {userEmail} </p>
    </div>
  );
}
