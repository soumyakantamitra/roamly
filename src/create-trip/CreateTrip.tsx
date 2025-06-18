import { Input } from "@/components/ui/input"
import { useState } from "react"

function CreateTrip() {

  const [place, setPlace] = useState("");

  const handleChange = (value: string) => {
    setPlace(value);
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Choose your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Let us know what you’re looking for in a trip, and our planner will design an itinerary you’ll love.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Enter your destination of choice</h2>
          <Input type="text" placeholder="Location" value={place} onChange={(e) => handleChange(e.target.value)}/>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">Let us know the number of days you plan to travel</h2>
          <Input type="number" placeholder="e.g. 12" value={place} onChange={(e) => handleChange(e.target.value)}/>
        </div>
      </div>
      
    </div>
  )
}

export default CreateTrip