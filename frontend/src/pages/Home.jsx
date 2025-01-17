import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
const Home = () => {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [pannelOpen, setPannelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);
  const [ConfirmedRidePannel, setConfirmedRidePannel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehiclePannelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const ConfirmRidePannelRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault();
  }
  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(pannelRef.current, {
        height: "70%",
        opacity: 1,
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(pannelRef.current, {
        height: "0",
        opacity: 0
      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0
      })
    }
  }, [pannelOpen])

  useGSAP(() => {
    if (vehiclePannelOpen) {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehiclePannelOpen])

  useGSAP(() => {
    if (ConfirmedRidePannel) {
      gsap.to(ConfirmRidePannelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(ConfirmRidePannelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [ConfirmedRidePannel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehicleFound])




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
            <h5 ref={pannelCloseRef} onClick={() => {
              setPannelOpen(false)
            }} className='absolute bottom-0 opacity-0 right-8 text-xl'><i className="ri-arrow-down-wide-fill"></i></h5>
            <h4 className='text-4xl font-semibold '>Find a trip</h4>
            <form onSubmit={(e) => {
              submitHandler(e)
            }}
              action="">
              <div className="line absolute h-16 w-1 top-[40%] left-10 bg-gray-900  rounded-full"></div>
              <input
                onClick={() => {
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
                onClick={() => {
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
            <LocationSearchPanel setpannelOpen={setPannelOpen} setVehiclePannel={setVehiclePannelOpen} />
          </div>
        </div>
        <div ref={vehiclePannelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 pt-12'>
          <VehiclePanel setConfirmedRidePannel={setConfirmedRidePannel} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={ConfirmRidePannelRef} className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmedRidePannel={setConfirmedRidePannel} />
        </div>
        <div ref={vehicleFoundRef}  className='fixed  w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver  setVehicleFound={setVehicleFound} setConfirmedRidePannel={setConfirmedRidePannel}/>
        </div>
      </div >
    </>
  )
}

export default Home
