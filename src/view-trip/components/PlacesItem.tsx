import { Button } from "@/components/ui/button"
import { TbMap2 } from "react-icons/tb"
import { Link } from "react-router-dom"

function PlacesItem( {place} : any ) {
  return (
    <div className="shadow-md mt-3 p-3 flex gap-5 rounded-xl">
      <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" alt="" 
        className="w-[150px] h-[150px] rounded-xl"
      />
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold text-lg self-center">{place?.name}</h2>
          <Link to={'https://www.google.com/maps/search/?api=1&query='+ place?.name} target="_blank">
            <Button variant="outline" size="sm">
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