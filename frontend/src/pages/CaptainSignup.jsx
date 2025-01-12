import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [color, setColor] = useState("")
  const [plate, setPlate] = useState("")
  const [capacity, setCapacity] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const { updateCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!["car", "bike", "auto"].includes(vehicleType)) {
      alert("Vehicle type must be either car, bike, or auto");
      return;
    }
    const data = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        VehicleType: vehicleType, // Ensure the key is correctly set to VehicleType
      }
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, data);
      updateCaptain(response.data);
      localStorage.setItem('token', response.data.token); // Save token in local storage
      navigate('/captain-home'); // Navigate to /home after successful registration
    } catch (error) {
      console.error("There was an error registering the captain!", error);
      // Handle registration error (e.g., show error message)
    }
    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
    setColor("")
    setPlate("")
    setCapacity("")
    setVehicleType("")
  }

  return (
    <>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          <form onSubmit={submitHandler} action="">
            <h3 className='text-lg font-medium mb-3'>Whats your Name</h3>
            <div className='flex gap-4 mb-5'>
              <input
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Firstname"
                required
              />
              <input
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Lastname"
                required
              />
            </div>
            <h3 className='text-lg font-medium mb-3'>Whats your email</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <h3 className='text-lg font-medium mb-3'>Enter your password</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <h3 className='text-lg font-medium mb-3'>Vehicle Information</h3>
            <div className=''>
              <div className='flex gap-4 mb-5'>
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Vehicle Color"
                  required
                />
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="Vehicle Plate Number"
                  required
                />
              </div>
              <div className='flex gap-4 mb-5'>
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                  type="number"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="Vehicle Capacity"
                  required
                />
                <select
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
            <button
              className='bg-[#111] text-white  font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'
            >
              Create Account
            </button>
          </form>
          <p className='text-center'>Existing Pilot <Link to="/captain-login" className='text-blue-600 '>Login here</Link></p>
        </div>
        <div>
          <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span>and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </>
  )
}

export default CaptainSignup