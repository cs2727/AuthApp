import './App.css';
import NavComponent from './Universal-Component/NavComponent';
import HomePage from './Pages/Home-Page/HomePage';
import SignUpPage from './Pages/SignUp-Page/SignUpPage';
import LoginPage from './Pages/Login-Page/LoginPage';
import SignedIn from './Pages/SignedIn-Page/SignedIn';
import UserDetails from './Pages/UserDetails-Page/UserDetails';
import ResetPassword from './Pages/ResetPassword-Page/ResetPassword';
import AuthContext from './Contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <AuthContext>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/user" element={<SignedIn />}></Route>
          <Route path="/UserDetails" element={<UserDetails />}></Route>
          <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
