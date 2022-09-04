import React, { useContext } from 'react';
import { authContextObject } from '../../Contexts/AuthContext';
import UserDetailsList from './UserDetails-Components/UserDetailsList';

export default function UserDetails() {
  const authContextProvider = useContext(authContextObject);
  let isLoaded = false;

  if (authContextProvider.user) {
    isLoaded = true;
  }

  return (
    <div>
      {isLoaded ? (
        <UserDetailsList />
      ) : (
        <h1>User Data is currently being....</h1>
      )}
    </div>
  );
}
