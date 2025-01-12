import React, { useRef, useState } from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
const Home = () => {

  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [pannelOpen, setPannelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
  }
  useGSAP(()=>{
    if(pannelOpen){
      gsap.to(pannelRef.current,{
        height:"70%",
        opacity:1,
      })
      gsap.to(pannelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(pannelRef.current,{
        height:"0",
        opacity:0
      })
      gsap.to(pannelCloseRef.current,{
        opacity:0
      })
    }
  },[pannelOpen])



  return (
    <>
      <div className='h-screen relative'>
        <img
          className="w-16 absolute top-5 left-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Uber Logo"
        />
        <div className='h-screen w-screen'>
          {/* Image for temporaty use */}
          <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/MindorksOpenSource/ridesharing-uber-lyft-app/master/assets/nearby-cabs.png" alt="" />
        </div>
        <div className=' h-screen flex flex-col justify-end absolute top-0  w-full '>
          <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={pannelCloseRef} onClick={()=>{
            setPannelOpen(false)
          }} className='absolute top-4 opacity-0 right-8 text-xl'><i class="ri-arrow-down-wide-fill"></i></h5>
            <h4 className='text-4xl font-semibold '>Find a trip</h4>
            <form onSubmit={(e) => {
              submitHandler(e)
            }}
              action="">
              <div className="line absolute h-16 w-1 top-[33%] left-10 bg-gray-900  rounded-full"></div>
              <input
              onClick={()=>{
                setPannelOpen(true)
              }}
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
                type="text"
                placeholder="Add a pickup location"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value)
                }}
              />
              <input
              onClick={()=>{
                setPannelOpen(true)
              }}
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
                type="text"
                placeholder="Enter dropoff location"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value)
                }}
              />
            </form>
          </div>
          <div ref={pannelRef} className='  bg-white h-0'>
            <LocationSearchPanel/>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home
