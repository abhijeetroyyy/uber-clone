import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  
  const locations = [
    {
      id: 1,
      address: "Connaught Place, New Delhi, Delhi 110001"
    },
    {
      id: 2,
      address: "Marine Drive, Mumbai, Maharashtra 400020"
    },
    {
      id: 3,
      address: "Park Street, Kolkata, West Bengal 700016"
    },
    {
      id: 4,
      address: "MG Road, Bangalore, Karnataka 560001"
    }
  ]

  return (
    <div className="location-search-panel">
      {locations.map(location => (
        <div onClick={()=>{
          props.setVehiclePannel(true);
          props.setpannelOpen(false);
        }}
          key={location.id}
          className="location-item flex border-2 bg-gray-50 rounded-xl items-center my-2 border-white active:border-black justify-start p-3 gap-5"
        >
          <div className="location-icon bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-line"></i>
          </div>
          <h4 className="location-address text-lg font-medium">{location.address}</h4>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel