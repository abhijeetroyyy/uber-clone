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
  const pannelCloseRef = useRef(null);
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);
  const vehiclePannelRef = useRef(null)



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

  useGSAP(()=>{
    if(vehiclePannelOpen){
    gsap.to(vehiclePannelRef.current,{
      transform:"translateY(0)"
      })
    }
    else{
      gsap.to(vehiclePannelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePannelOpen])

  return (
    <>
      <div className='h-screen relative overflow-hidden'>
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
          }} className='absolute top-4 opacity-0 right-8 text-xl'><i className="ri-arrow-down-wide-fill"></i></h5>
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
          <div ref={pannelRef} className='bg-white h-0 p-3'>
            <LocationSearchPanel setpannelOpen={setPannelOpen}   setVehiclePannel={setVehiclePannelOpen}/>
          </div>
        </div>
        <div ref={vehiclePannelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
          <h2 onClick={()=>{
            setVehiclePannelOpen(false)
          }} className='text-right text-3xl'><i className=" ri-arrow-down-s-line"></i></h2>
          <h2 className='text-2xl font-semibold mb-5'>Choose a vehicle</h2>
          <div className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹193.20</h2>
          </div>
          <div className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹93</h2>
          </div>
          <div className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1670427549/assets/c4/c2552a-2317-4b9e-becf-ed7b96459edd/original/UberBlack-1.jpg" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Prime seden <span><i className="ri-user-fill"></i>5</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹293.20</h2>
          </div>
          <div className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Auto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹153.20</h2>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home
