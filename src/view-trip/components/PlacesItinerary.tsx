import type { TripType } from "../types"
import PlacesItem from "./PlacesItem"

function PlacesItinerary( {trip}: TripType ) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
    
      <div>
        {trip.tripData?.itinerary.map((plan) => (
          <div>
            <h2 className="font-medium text-lg mt-5">Day {plan.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {plan.places.map((venue) => (
                <div className="my-3">
                  <h2 className="text-sm font-medium text-blue-600">{venue.best_time_to_visit}</h2>
                  <PlacesItem place={venue} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PlacesItinerary