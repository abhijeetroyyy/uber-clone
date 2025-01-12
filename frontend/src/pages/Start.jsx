import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <>
    <div className='bg-bottom bg-center bg-[url(https://images.unsplash.com/photo-1695066584644-5453334ff5ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover h-screen pt-7  flex justify-between flex-col w-full'>
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className='bg-white pb-7 py-4 px-4'>
        <h1 className='text-3xl font-bold'>Get Started with Uber</h1>
        <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
    </>
  )
}

export default Start
