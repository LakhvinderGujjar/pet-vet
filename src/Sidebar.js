import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
      {isSidebarOpen && (
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/pet-list">Pet List</Link>
          <Link to="/services">Services</Link>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
