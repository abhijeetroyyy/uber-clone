import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    } else {
      setIsAuthenticated(true); // Set authentication state
    }
  }, [navigate]);

  // Show a loading indicator while checking authentication
  if (!isAuthenticated) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default UserProtectedWrapper;
