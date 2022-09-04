import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import { authContextObject } from '../Contexts/AuthContext';

export default function NavComponent() {
  const authContextProvider = useContext(authContextObject);
  const ul = useRef();

  function toggleState() {
    authContextProvider.signOut();
  }

  function selectedLink(eventInstance) {
    for (const element of ul.current.children) {
      element.children[0].classList.remove('border');
    }

    const liElement = eventInstance.currentTarget;
    liElement.children[0].classList.add('border');
  }

  return (
    <div className="navigationContainer">
      <ul ref={ul}>
        <li key="1" onClick={selectedLink}>
          <Link to="/">Home</Link>
        </li>
        {authContextProvider.user ? (
          <>
            <li key="2" onClick={selectedLink}>
              <Link to="UserDetails">User Details</Link>
            </li>
            <li key="3" onClick={toggleState}>
              <a>Sign Out</a>
            </li>
          </>
        ) : (
          <>
            <li key="4" onClick={selectedLink}>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li key="5" onClick={selectedLink}>
              <Link to="/Login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
