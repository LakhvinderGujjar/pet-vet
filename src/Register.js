import React, { useState } from 'react';
import * as Yup from 'yup'; // Import Yup for validation
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z ]*$/, 'Name must contain only letters').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one lowercase letter, one number, and one special character.').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }

    
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      })
      .catch((error) => {
        
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error.errors[0] }));
      });
  };

  const handleRegister = () => {
    
    console.log(`Registered with name: ${name}, email: ${email}, phone: ${phone}, and password: ${password}`);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="input-container">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="input-container">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="input-container">
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleInputChange}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <div className="input-container">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
