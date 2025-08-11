import { Link } from "react-router-dom"
import type { TripType } from "../types"

function Hotels({ trip } : TripType) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hotel Recommendations</h2>
      <div className="my-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotel_options.map((hotel) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query='+ hotel?.name + ", " + hotel?.address} target="_blank">
            <div className="group transition hover:shadow-sm hover:bg-secondary rounded-xl p-1">
              <div className="overflow-hidden rounded-xl">
                <img src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1536317956/Hotel/Automation/00136351/file_f1fepa.jpg" alt="" 
                className="rounded-xl group-hover:scale-105 transition duration-250"
              />
              </div>
              
              <div className="my-2 grid px-2 content-between h-30">
                <h2 className="font-medium truncate">{hotel?.name}</h2>
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