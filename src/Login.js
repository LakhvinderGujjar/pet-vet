import React, { useState } from 'react';
import * as Yup from 'yup'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one lowercase letter, one number, and one special character.'
    )
    .required('Password is required'),
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    validationSchema
      .validate({ email, password })
      .then(() => {
        
        console.log(`Logged in with email: ${email} and password: ${password}`);
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
        });
        navigate('/home'); 
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <i className="fa fa-envelope" />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        {/* <i className="fa fa-lock" /> */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
