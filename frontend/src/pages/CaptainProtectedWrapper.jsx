import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    const verifyCaptain = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token

      if (!token) {
        navigate('/captain-login'); // Redirect if no token
        return;
      }

      try {
        const { data, status } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (status === 200) {
          setCaptain(data.captain); // Update captain context
        } else {
          throw new Error('Invalid response status');
        }
      } catch (error) {
        console.error('Error verifying captain:', error.message);
        localStorage.removeItem('token'); // Clear token on error
        navigate('/captain-login'); // Redirect to login
      }
    };

    verifyCaptain();
  }, [navigate, setCaptain]);

  // Render children immediately since redirection is handled
  return <>{children}</>;
};

export default CaptainProtectedWrapper;
