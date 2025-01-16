import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
    <h2 onClick={() => {
            props.setVehiclePannelOpen(false)
          }} className='text-right text-3xl'><i className=" ri-arrow-down-s-line"></i></h2>
          <h2 className='text-2xl font-semibold mb-5'>Choose a vehicle</h2>
          <div onClick={()=>{
            props.setConfirmedRidePannel(true)
          }}
           className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>₹193.20</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmedRidePannel(true)
          }} className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹93</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmedRidePannel(true)
          }} className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1670427549/assets/c4/c2552a-2317-4b9e-becf-ed7b96459edd/original/UberBlack-1.jpg" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Prime seden <span><i className="ri-user-fill"></i>5</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹293.20</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmedRidePannel(true)
          }} className='flex border-2 bg-gray-50 active:border-black mb-3 rounded-xl w-full items-center  justify-between p-3'>
            <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Auto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away </h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹153.20</h2>
          </div>
    </>
  )
}

export default VehiclePanel