import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h2 onClick={() => {
        props.setVehicleFound(false)
      }} className='text-right text-3xl'><i className=" ri-arrow-down-s-line"></i></h2>
      <h2 className='text-2xl font-semibold mb-5'>Looking your Ride</h2>
      <div className='flex gap-2 justify-between items-center p-3 flex-col'>
        <img className='h-25' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <h2><i className="ri-map-pin-line"></i></h2>
            <div >
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600 '>New Alipurduar Wrd no 16 </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <h2><i className="ri-map-pin-2-fill"></i></h2>
            <div >
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600 '>New Alipurduar Wrd no 16 </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <h2><i className="ri-cash-line"></i></h2>
            <div >
              <h3 className='text-lg font-medium'>₹193.20</h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LookingForDriver