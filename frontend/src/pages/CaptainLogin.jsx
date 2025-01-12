import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, data);
      localStorage.setItem('token', response.data.token); // Save token in local storage
      navigate('/captain-home'); // Navigate to /home after successful login
    } catch (error) {
      console.error("There was an error logging in the captain!", error);
      // Handle login error (e.g., show error message)
    }
    setemail("")
    setpassword("")
  }

  return (
    <>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-5' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          <form onSubmit={submitHandler} action="">
            <h3 className='text-lg font-medium mb-3'>Whats your email</h3>
            <input
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <h3 className='text-xl font-medium mb-3'>Enter your password</h3>
            <input
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              className='bg-[#111] text-white  font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >
              Login
            </button>
          </form>
          <p className='text-center'>New captain <Link to="/captain-signup" className='text-blue-600 '>Register as a captain</Link></p>
        </div>
        <div>
          <Link to="/login"
          className='bg-[#d5512d] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as User</Link>
        </div>
      </div>
    </>
  )
}

export default CaptainLogin
