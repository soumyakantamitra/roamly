import type { TripType } from "../types"

function Hotels({ trip } : TripType) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hotel Recommendations</h2>
      <div>
        {trip?.tripData?.hotel_options.map((item, index) => (
          <div key={index}>
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels