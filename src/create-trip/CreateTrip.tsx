import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { budgetSelect, prompt, travelerCount } from "@/constants/options";
import aiGeneration from "@/service/AIModel";
import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "sonner";

function CreateTrip() {

  const [formData, setFormData] = useState({
    location : '',
    duration : '0',
    budget : '',
    people : ''
  });

  const [openDailog, setOpenDailog] = useState(false);

  const handleInputChange = (name: string, value: string) => {

    setFormData({
      ...formData,
      [name] : value
    });
  }

  const OnGenerateTrip = async() => {

    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDailog(true);
      return ;
    }

    if (!formData.location || !formData.budget || !formData.people 
      || (parseInt(formData.duration) < 5 || parseInt(formData.duration) > 30)) {
        
        toast.error("Please fill up all the details");
        return ;
      }

    console.log(formData);
    const finalPrompt = prompt
      .replace('{location}', formData.location)
      .replace('{duration}', formData.duration)
      .replace('{budget}', formData.budget)
      .replace('{people}', formData.people)
    console.log(finalPrompt);
    const trip = await aiGeneration(finalPrompt);
    console.log(trip);
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
          <Input type="text" placeholder="Location" onChange={(e) => handleInputChange("location", e.target.value)}/>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">Let us know the number of days you plan to travel</h2>
          <Input type="number" placeholder="e.g. 12" onChange={(e) => handleInputChange("duration", e.target.value)}/>
        </div>
      </div>

      <div className="my-10 flex flex-col">
        <h2 className="text-xl my-3 font-medium">Tell us about your budget</h2>
        <div className="mt-3">
          {budgetSelect.map((item) => (
            <div key={item.id} 
              className={`my-3 p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                ${formData.budget === item.title ? 'shadow-lg border-black' : ''}`}
              onClick={() => handleInputChange("budget", item.title)}>
              <h2 className="text-3xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">Who’s coming along for your next big trip?</h2>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {travelerCount.map((item) => (
            <div key={item.id} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
              ${formData.people === item.people ? 'shadow-lg border-black' : ''}`}
              onClick={() => handleInputChange("people", item.people)}>
              <h2 className="text-3xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
            ))}
        </div>
      </div>

      <div className="my-10 flex justify-between">
        <Link to={'/'}>
          <Button>Go Back</Button>
        </Link>
        
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  )
}

export default CreateTrip