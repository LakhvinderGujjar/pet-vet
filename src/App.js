import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import PetList from './PetList';
import Services from './Services';
import Header from './Header'; // Include the Header component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="pet-list" element={<PetList />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
