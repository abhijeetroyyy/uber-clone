import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [userData, setUserData] = useState({})
  const { user, setUser } = React.useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();   
    const userdata = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userdata)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', (data.token))
      navigate('/home')
    }
    
    setemail("")
    setpassword("")

  }
  return (
    <>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
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
            <p className='text-center'>New here? <Link to="/signup" className='text-blue-600 '>Create New Account</Link></p>
        </div>
        <div>
          <Link to="/captain-login"
          className='bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as Captain</Link>
        </div>
      </div>
    </>
  )
}

export default UserLogin
