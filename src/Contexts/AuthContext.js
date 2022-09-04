import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';

export const authContextObject = createContext();

// AuthContext Component
function AuthContext(propsObject) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // This function will handle both logging in and signing up
  function userToggler(method, email, password) {
    if (method === 'SignUp') {
      authStateChecker(createUserWithEmailAndPassword, email, password);
    } else {
      authStateChecker(signInWithEmailAndPassword, email, password);
    }
  }

  // this function will be called by userToggler for creating an account or logging into an account
  async function authStateChecker(method, email, password) {
    try {
      await method(auth, email, password);
      navigate('/user', { replace: false });
    } catch (error) {
      return error.code;
    }
  }

  // this function will be responsible for signing User out
  async function signingOut() {
    try {
      await signOut(auth);
      navigate('/', { replace: false });
    } catch (error) {
      console.log('error');
    }
  }

  // this function will be responsible for sending verification link to users email
  async function verifiyingEmail() {
    try {
      await sendEmailVerification(user);
      alert('password reset email sent');
    } catch (error) {
      alert('Error sending email verification link');
    }
  }

  // this function will be responsible for resetting users password
  async function resettingPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('password reset link sent');
    } catch (error) {
      alert('Error sending password reset email:');
    }
  }

  // contains onAuthStateChanged event listener for changing user state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Auth Context Functionailites Object that we will pass to all components that need it
  // Will allow us to manage auth state using this object by creating acc, signing in, signing out, resetting password etc
  const authContextFunctionailities = {
    createUser: userToggler,
    loginUser: userToggler,
    signOut: signingOut,
    verifyEmail: verifiyingEmail,
    resetPassword: resettingPassword,
    user: user,
  };

  return (
    <authContextObject.Provider value={authContextFunctionailities}>
      {propsObject.children}
    </authContextObject.Provider>
  );
}

export default AuthContext;
