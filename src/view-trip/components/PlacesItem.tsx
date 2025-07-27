import { Button } from "@/components/ui/button"
import { TbMap2 } from "react-icons/tb"
import { Link } from "react-router-dom"

function PlacesItem( {place} : any ) {
  return (
    <div className="shadow-md shadow-border mt-3 p-3 flex gap-5 rounded-xl bg-card">
      <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="" 
        className="w-[150px] h-[150px] rounded-xl border-1"
      />
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold text-lg self-center">{place?.name}</h2>
          <Link to={'https://www.google.com/maps/search/?api=1&query='+ place?.name} target="_blank">
            <Button variant="secondary" size="icon" className="size-8 cursor-pointer">
              <TbMap2 />
            </Button>
          </Link>
        </div>
        
        <p className="mt-2 text-sm text-gray-500">{place?.description}</p>
        <h2 className="mt-2">{place.time_to_travel_minutes} minutes away</h2>
        
      </div>
    </div>
  )
}

export default PlacesItem