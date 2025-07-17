import type { TripType } from "../types"

function PlacesItinerary( {trip}: TripType ) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
    
      <div>
        {trip.tripData?.itinerary.map((plan) => (
          <div>
            <h2 className="font-medium text-lg">Day {plan.day}</h2>
            {plan.places.map((venue) => (
              <div>
                <h2>{venue.name}</h2>
                <h2 className="text-sm font-medium text-blue-600">{venue.best_time_to_visit}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default PlacesItinerary