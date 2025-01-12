import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token inside useEffect

    // If no token, navigate to login
    if (!token) {
      navigate('/login');
      return;
    }

    // Call the logout API
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token'); // Remove token
          navigate('/login'); // Navigate to login
        }
      })
      .catch((error) => {
        console.error('Logout Error:', error);
        // Navigate to login even if logout API fails
        localStorage.removeItem('token'); // Ensure token is removed
        navigate('/login');
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
