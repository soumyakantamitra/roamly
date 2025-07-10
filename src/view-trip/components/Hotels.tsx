import { Link } from "react-router-dom"
import type { TripType } from "../types"

function Hotels({ trip } : TripType) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hotel Recommendations</h2>
      <div className="my-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotel_options.map((hotel, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query='+ hotel?.name + ", " + hotel?.address} target="_blank">
            <div key={index} className="hover:scale-105 transition duration-300">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" alt="" 
                className="rounded-xl"
              />
              <div className="my-2 grid grid-rows-[25px_35px_25px_25px] ">
                <h2 className="font-medium">{hotel?.name}</h2>
                <h2 className="text-xs text-gray-500">{hotel?.address}</h2>
                <h2 className="text-sm font-semibold">{hotel?.price_per_night} per night</h2>
                <h2 className="text-sm">{hotel?.rating} stars</h2>
              </div>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  )
}

export default Hotels