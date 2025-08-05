import { Badge } from "@/components/ui/badge";
import getLocationImage from "@/service/ImageApi";
import type { TripType } from "@/view-trip/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function UserTripCard( {trip}: TripType ) {

  const [locationImage, setLocationImage] = useState("https://archive.org/download/placeholder-image/placeholder-image.jpg");

  useEffect(() => {
      const getImage = async() => {
  
        if (!trip?.userPreference?.location) return
  
        try {
          const data = await getLocationImage(trip?.userPreference?.location);
          setLocationImage(data);
        } catch (error) {
          console.error('Failed to load images:', error);
        }
      }
      getImage();
    }, [trip?.userPreference?.location])

  return (
    <Link to={'/view-trip/' + trip?.id}>
      <div className="w-60 rounded-xl shadow-md dark:shadow-border p-1 hover:shadow-lg bg-card transition-shadow delay-50">
        <img src={locationImage} alt="" 
          className="border-2 border-zinc-500 rounded-xl w-full h-40 object-cover"
        />
        <div className="p-3 flex flex-col gap-2">
          <h2 className="font-bold text-xl">{trip?.userPreference?.location}</h2>
          <Badge variant={"secondary"}>{trip?.userPreference?.budget} Budget</Badge>
          <Badge variant={"secondary"}>For {trip?.userPreference?.people}</Badge>
        </div>
      </div>
    </Link>
    
  )
}

export default UserTripCard