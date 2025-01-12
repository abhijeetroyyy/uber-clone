import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        setUser(data.user); // Update user in context
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        localStorage.setItem('token', (data.token))
        navigate('/home'); // Navigate to home after successful registration
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration Error:', err); // Log actual error for debugging
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-3">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
              required
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Lastname"
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-3">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <h3 className="text-lg font-medium mb-3">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button
            className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base"
            type="submit"
          >
            Create Account
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-center">
          Existing User?{' '}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight">
          By proceeding, you consent to get calls, WhatsApp, or SMS messages, including by automated means, from Uber and
          its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
