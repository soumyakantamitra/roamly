import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { budgetSelect, prompt, travelerCount } from "@/constants/options";
import aiGeneration from "@/service/AIModel";
import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useGoogleLogin, type TokenResponse } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";


function CreateTrip() {

  const [formData, setFormData] = useState({
    location : '',
    duration : '0',
    budget : '',
    people : ''
  });

  const [openDailog, setOpenDailog] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {

    setFormData({
      ...formData,
      [name] : value
    });
  }

  const login = useGoogleLogin({
    onSuccess: (response: TokenResponse) => getUserProfile(response),
    onError: (error) => console.log(error)
  })

  const OnGenerateTrip = async() => {

    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDailog(true);
      return ;
    }

    if (!formData.location || !formData.budget || !formData.people 
      || (parseInt(formData.duration) < 3 || parseInt(formData.duration) > 20)) {
        
        toast.error("Please fill up all the details");
        return ;
      }
    
    setLoading(true);

    console.log(formData);
    const finalPrompt = prompt
      .replace('{location}', formData.location)
      .replace('{duration}', formData.duration)
      .replace('{budget}', formData.budget)
      .replace('{people}', formData.people)
    console.log(finalPrompt);
    const trip = await aiGeneration(finalPrompt);
    console.log(trip);
    setLoading(false);
    saveTrip(JSON.parse(trip));
  }

  const saveTrip = async(tripData: object) => {
    
    setLoading(true);
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const docId = Date.now().toString();

    await setDoc(doc(db, "Trips", docId), {
      userPreference: formData,
      tripData: tripData,
      userEmail: user.email,
      id: docId
    });
    setLoading(false);
  }

  const getUserProfile = (tokenInfo: TokenResponse) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'Application/json'
      }
    }).then((response) => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data));
      setOpenDailog(false);
      OnGenerateTrip();
    })
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
              className={`my-4 p-4 border rounded-lg cursor-pointer 
                ${formData.budget === item.title ? 
                  'shadow-[5px_5px_0px_0px_rgba(109,40,217)]' : 'hover:shadow-lg dark:hover:shadow-accent'}`}
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
            <div key={item.id} className={`p-4 border rounded-lg cursor-pointer
              ${formData.people === item.people ? 
                'shadow-[5px_5px_0px_0px_rgba(237,153,36)]' : 'hover:shadow-lg dark:hover:shadow-accent'}`}
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
        
        <Button 
          onClick={OnGenerateTrip}
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Trip"}
        </Button>
      </div>

      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle><img src="/logo.svg" className="w-35"/></DialogTitle>
            <DialogDescription className="mt-3">
              Sign in securely with Google authentication
              <Button
                onClick={() => login()} 
                className="w-full mt-5 flex gap-4 items-center">
                <FcGoogle className="size-5"/>
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateTrip